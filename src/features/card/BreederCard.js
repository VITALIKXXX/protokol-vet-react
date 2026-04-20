import { useState } from "react";
import { buildTelLink, normalizeMapUrl } from "../../core/utils/buildLinks.js";
import { copyToClipboard } from "../../core/utils/copyToClipboard.js";
import {
    Card,
    Top,
    TitleRow,
    Name,
    Actions,
    SmallButton,
    DangerButton,
    Meta,
    MetaRow,
    MetaLabel,
    MetaValue,
    Bottom,
    Quick,
    LinkButton,
    CopyButton,
} from "./BreederCard.styles.js";

export const BreederCard = ({ breeder, onEdit, onDelete }) => {
    const [copied, setCopied] = useState(false);

    const mapLink = normalizeMapUrl(breeder.mapUrl);

    const contacts =
        breeder.contacts?.length > 0
            ? breeder.contacts
            : breeder.contactName || breeder.phone
                ? [
                    {
                        person: breeder.contactName || "",
                        phone: breeder.phone || "",
                    },
                ]
                : [];

    const handleCopy = async () => {
        const contactsText = contacts
            .map(
                (contact, index) =>
                    `Kontakt ${index + 1}: ${contact.person || "-"} | ${contact.phone || "-"}`
            )
            .join("\n");

        const text = [
            `Hodowca: ${breeder.name}`,
            contactsText,
            breeder.mapUrl ? `Mapa: ${breeder.mapUrl}` : "",
            breeder.note ? `Notatka: ${breeder.note}` : "",
        ]
            .filter(Boolean)
            .join("\n");

        const ok = await copyToClipboard(text);
        setCopied(ok);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <Card>
            <Top>
                <TitleRow>
                    <Name>{breeder.name}</Name>
                </TitleRow>

                <Actions>
                    {onEdit && (
                        <SmallButton type="button" onClick={() => onEdit(breeder)}>
                            Edytuj
                        </SmallButton>
                    )}

                    {onDelete && (
                        <DangerButton type="button" onClick={() => onDelete(breeder.id)}>
                            Usuń
                        </DangerButton>
                    )}
                </Actions>
            </Top>

            <Meta>
                {contacts.map((contact, index) => (
                    <MetaRow key={`${breeder.id}-${index}`}>
                        <MetaLabel>Kontakt {index + 1}:</MetaLabel>
                        <MetaValue>
                            {contact.person || "—"}
                            {contact.phone ? ` — ${contact.phone}` : ""}
                        </MetaValue>
                    </MetaRow>
                ))}

                {breeder.note && (
                    <MetaRow>
                        <MetaLabel>Notatka:</MetaLabel>
                        <MetaValue>{breeder.note}</MetaValue>
                    </MetaRow>
                )}
            </Meta>

            <Bottom>
                <Quick>
                    {contacts.map((contact, index) => {
                        const telLink = buildTelLink(contact.phone);

                        return (
                            <LinkButton
                                key={`${contact.person}-${contact.phone}-${index}`}
                                href={telLink || "#"}
                                onClick={(e) => !telLink && e.preventDefault()}
                                $disabled={!telLink}
                            >
                                Zadzwoń {contact.person || index + 1}
                            </LinkButton>
                        );
                    })}

                    <LinkButton
                        href={mapLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => !mapLink && e.preventDefault()}
                        $disabled={!mapLink}
                    >
                        Mapa
                    </LinkButton>

                    <CopyButton type="button" onClick={handleCopy}>
                        {copied ? "Skopiowano ✅" : "Kopiuj"}
                    </CopyButton>
                </Quick>
            </Bottom>
        </Card>
    );
};