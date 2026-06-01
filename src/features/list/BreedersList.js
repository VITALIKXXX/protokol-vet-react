import { BreederCard } from "../card/BreederCard.js";
import { Empty, EmptyTitle, EmptyText, Grid } from "./BreedersList.styles.js";

export const BreedersList = ({ breeders, onOpen, onEdit, onDelete }) => {
    if (!breeders.length) {
        return (
            <Empty>
                <EmptyTitle>Brak hodowców</EmptyTitle>
                <EmptyText>Dodaj pierwszego hodowcę u góry.</EmptyText>
            </Empty>
        );
    }

    return (
        <Grid>
            {breeders.map((b) => (
                <BreederCard
                    key={b.id}
                    breeder={b}
                    onOpen={onOpen}
                    onEdit={onEdit}
                    onDelete={onDelete} />
            ))}
        </Grid>
    );
};