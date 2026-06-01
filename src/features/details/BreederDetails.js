import { buildTelLink, normalizeMapUrl } from "../../core/utils/buildLinks.js";
import {
    DetailsCard,
    BackButton,
    Title,
    Section,
    ContactRow,
    Actions,
    ButtonLink,
    Button,
} from "./BreederDetails.styles.js";

export const BreederDetails = ({ breeder, onBack, onEdit, onDelete }) => {
    const mapLink = normalizeMapUrl(breeder.mapUrl);
    const contacts = breeder.contacts || [];

    return (
        <DetailsCard>
            <BackButton type="button" onClick={onBack}>
                ← Wróć
            </BackButton>

            <Title>{breeder.name}</Title>

            <Section>
                <h3>Kontakty</h3>

                {contacts.map((contact, index) => {
                    const telLink = buildTelLink(contact.phone);

                    return (
                        <ContactRow key={index}>
                            <div>
                                <strong>{contact.person || `Kontakt ${index + 1}`}</strong>
                                <p>{contact.phone || "Brak telefonu"}</p>
                            </div>

                            {telLink && (
                                <ButtonLink href={telLink}>
                                    Zadzwoń
                                </ButtonLink>
                            )}
                        </ContactRow>
                    );
                })}
            </Section>

            {breeder.note && (
                <Section>
                    <h3>Notatka</h3>
                    <p>{breeder.note}</p>
                </Section>
            )}

            <Actions>
                {mapLink && (
                    <ButtonLink href={mapLink} target="_blank" rel="noreferrer">
                        Mapa
                    </ButtonLink>
                )}

                {onEdit && (
                    <Button type="button" onClick={() => onEdit(breeder)}>
                        Edytuj
                    </Button>
                )}

                {onDelete && (
                    <Button type="button" onClick={() => onDelete(breeder.id)}>
                        Usuń
                    </Button>
                )}
            </Actions>
        </DetailsCard>
    );
};