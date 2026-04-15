import { useEffect, useMemo, useState } from "react";
import {
    createBreeder,
    subscribeBreeders,
    updateBreeder,
    removeBreeder,
} from "../../core/firebase/breedersApi.js";
import { BreederForm } from "../form/BreederForm.js";
import { BreedersList } from "../list/BreedersList.js";
import {
    Page,
    TopGrid,
    SearchBox,
    SearchLabel,
    SearchInput,
    SearchMeta,
} from "./BreedersPage.styles.js";


export const BreedersPage = ({ role }) => {
    const isAdmin = role === "admin";
    const [breeders, setBreeders] = useState([]);
    const [query, setQuery] = useState("");
    const [editingBreeder, setEditingBreeder] = useState(null);

    useEffect(() => {
        const unsubscribe = subscribeBreeders(setBreeders);
        return () => unsubscribe();
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        const sorted = [...breeders].sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
        if (!q) return sorted;

        const match = (value) => String(value || "").toLowerCase().includes(q);

        return sorted.filter(
            (b) => match(b.name) || match(b.farmNumber) || match(b.contactName)
        );
    }, [breeders, query]);

    const handleCreate = async (data) => {
        await createBreeder(data);
    };

    const handleUpdate = async (id, data) => {
        await updateBreeder(id, data);
        setEditingBreeder(null);
    };

    const handleDelete = async (id) => {
        const ok = window.confirm("Na pewno usunąć tego hodowcę?");
        if (!ok) return;

        await removeBreeder(id);

        if (editingBreeder?.id === id) {
            setEditingBreeder(null);
        }
    };
    const handleEditStart = (breeder) => {
        setEditingBreeder(breeder);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCancelEdit = () => setEditingBreeder(null);

    return (
        <Page>
            <TopGrid>
                <BreederForm
                    mode={editingBreeder ? "edit" : "create"}
                    initialValues={editingBreeder}
                    onCreate={handleCreate}
                    onUpdate={handleUpdate}
                    onCancelEdit={handleCancelEdit}
                />

                <SearchBox>
                    <SearchLabel htmlFor="q">Szukaj (nazwa / nr fermy / kontakt)</SearchLabel>
                    <SearchInput
                        id="q"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="np. Kowalski, 123, Jan..."
                    />
                    <SearchMeta>
                        Wyniki: <b>{filtered.length}</b> / {breeders.length}
                    </SearchMeta>
                </SearchBox>
            </TopGrid>

            <BreedersList
                breeders={filtered}
                onEdit={isAdmin ? handleEditStart : undefined}
                onDelete={isAdmin ? handleDelete : undefined} />
        </Page>
    );
};