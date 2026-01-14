import { useEffect, useMemo, useState } from "react";
import { loadBreeders, saveBreeders } from "../../core/storage/breedersStorage.js";
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

const createId = () => `${Date.now()}_${Math.random().toString(16).slice(2)}`;

export const BreedersPage = () => {
    const [breeders, setBreeders] = useState(() => loadBreeders());
    const [query, setQuery] = useState("");
    const [editingBreeder, setEditingBreeder] = useState(null);

    useEffect(() => {
        saveBreeders(breeders);
    }, [breeders]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        const sorted = [...breeders].sort((a, b) => b.createdAt - a.createdAt);
        if (!q) return sorted;

        const match = (value) => String(value || "").toLowerCase().includes(q);

        return sorted.filter(
            (b) => match(b.name) || match(b.farmNumber) || match(b.contactName)
        );
    }, [breeders, query]);

    const handleCreate = (data) => {
        const newBreeder = {
            id: createId(),
            name: data.name,
            farmNumber: data.farmNumber,
            contactName: data.contactName,
            phone: data.phone,
            mapUrl: data.mapUrl,
            note: data.note,
            createdAt: Date.now(),
        };

        setBreeders((prev) => [newBreeder, ...prev]);
    };

    const handleUpdate = (id, data) => {
        setBreeders((prev) =>
            prev.map((b) =>
                b.id === id
                    ? {
                        ...b,
                        name: data.name,
                        farmNumber: data.farmNumber,
                        contactName: data.contactName,
                        phone: data.phone,
                        mapUrl: data.mapUrl,
                        note: data.note,
                    }
                    : b
            )
        );
        setEditingBreeder(null);
    };

    const handleDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const ok = confirm("Na pewno usunąć tego hodowcę?");
        if (!ok) return;

        setBreeders((prev) => prev.filter((b) => b.id !== id));
        if (editingBreeder?.id === id) setEditingBreeder(null);
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

            <BreedersList breeders={filtered} onEdit={handleEditStart} onDelete={handleDelete} />
        </Page>
    );
};