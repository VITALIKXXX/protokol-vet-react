import { useState } from "react";
import { buildTelLink, normalizeMapUrl } from "../../core/utils/buildLinks.js";
import { copyToClipboard } from "../../core/utils/copyToClipboard.js";
import {
    Card,
    Top,
    TitleRow,
    Badge,
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

    const telLink = buildTelLink(breeder.phone);
    const mapLink = normalizeMapUrl(breeder.mapUrl);

    const handleCopy = async () => {
        const text = [
            `Hodowca: ${breeder.name}`,
            `Ferma: ${breeder.farmNumber}`,
            breeder.contactName ? `Kontakt: ${breeder.contactName}` : "",
            breeder.phone ? `Tel: ${breeder.phone}` : "",
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
                    <Badge>#{breeder.farmNumber}</Badge>
                    <Name>{breeder.name}</Name>
                </TitleRow>

                <Actions>
                    <SmallButton type="button" onClick={() => onEdit(breeder)}>
                        Edytuj
                    </SmallButton>
                    <DangerButton type="button" onClick={() => onDelete(breeder.id)}>
                        Usuń
                    </DangerButton>
                </Actions>
            </Top>

            <Meta>
                {breeder.contactName && (
                    <MetaRow>
                        <MetaLabel>Kontakt:</MetaLabel>
                        <MetaValue>{breeder.contactName}</MetaValue>
                    </MetaRow>
                )}

                {breeder.phone && (
                    <MetaRow>
                        <MetaLabel>Telefon:</MetaLabel>
                        <MetaValue>{breeder.phone}</MetaValue>
                    </MetaRow>
                )}

                {breeder.note && (
                    <MetaRow>
                        <MetaLabel>Notatka:</MetaLabel>
                        <MetaValue>{breeder.note}</MetaValue>
                    </MetaRow>
                )}
            </Meta>

            <Bottom>
                <Quick>
                    <LinkButton
                        href={telLink || "#"}
                        onClick={(e) => !telLink && e.preventDefault()}
                        $disabled={!telLink}
                    >
                        Zadzwoń
                    </LinkButton>

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