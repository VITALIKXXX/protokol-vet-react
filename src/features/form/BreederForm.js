import { useEffect, useState } from "react";
import {
    Card,
    Header,
    Title,
    Hint,
    Form,
    Row,
    Field,
    Label,
    Input,
    Textarea,
    Actions,
    Button,
} from "./BreederForm.styles.js";

const createEmptyContact = () => ({ person: "", phone: "" });

const empty = {
    name: "",
    contacts: [createEmptyContact(), createEmptyContact(), createEmptyContact()],
    mapUrl: "",
    note: "",
};

const normalizeInitialContacts = (initialValues) => {
    if (Array.isArray(initialValues?.contacts) && initialValues.contacts.length) {
        const prepared = initialValues.contacts.map((contact) => ({
            person: String(contact?.person || "").trim(),
            phone: String(contact?.phone || "").trim(),
        }));

        while (prepared.length < 3) {
            prepared.push(createEmptyContact());
        }

        return prepared.slice(0, 3);
    }

    if (initialValues?.contactName || initialValues?.phone) {
        return [
            {
                person: String(initialValues?.contactName || "").trim(),
                phone: String(initialValues?.phone || "").trim(),
            },
            createEmptyContact(),
            createEmptyContact(),
        ];
    }

    return [createEmptyContact(), createEmptyContact(), createEmptyContact()];
};

export const BreederForm = ({
    mode,
    initialValues,
    onCreate,
    onUpdate,
    onCancelEdit,
}) => {
    const [values, setValues] = useState(empty);

    useEffect(() => {
        if (mode === "edit" && initialValues) {
            setValues({
                name: initialValues.name || "",
                contacts: normalizeInitialContacts(initialValues),
                mapUrl: initialValues.mapUrl || "",
                note: initialValues.note || "",
            });
            return;
        }

        setValues(empty);
    }, [mode, initialValues]);

    const setField = (key) => (e) => {
        setValues((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    const setContactField = (index, key) => (e) => {
        setValues((prev) => {
            const nextContacts = [...prev.contacts];

            nextContacts[index] = {
                ...nextContacts[index],
                [key]: e.target.value,
            };

            return {
                ...prev,
                contacts: nextContacts,
            };
        });
    };

    const isValid = values.name.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;

        const payload = {
            name: values.name.trim(),
            contacts: values.contacts
                .map((contact) => ({
                    person: contact.person.trim(),
                    phone: contact.phone.trim(),
                }))
                .filter((contact) => contact.person || contact.phone),
            mapUrl: values.mapUrl.trim(),
            note: values.note.trim(),
        };

        if (mode === "edit" && initialValues?.id) {
            onUpdate(initialValues.id, payload);
            return;
        }

        onCreate(payload);
        setValues(empty);
    };

    return (
        <Card>
            <Header>
                <Title>{mode === "edit" ? "Edytuj hodowcę" : "Dodaj hodowcę"}</Title>
                <Hint>
                    Wymagane: <b>Nazwa</b>
                </Hint>
            </Header>

            <Form onSubmit={handleSubmit}>
                <Field>
                    <Label>Nazwa hodowcy *</Label>
                    <Input
                        value={values.name}
                        onChange={setField("name")}
                        placeholder="np. Karpisiak"
                    />
                </Field>

                <Row>
                    <Field>
                        <Label>Kontakt 1 — osoba</Label>
                        <Input
                            value={values.contacts[0].person}
                            onChange={setContactField(0, "person")}
                            placeholder="np. Jan"
                        />
                    </Field>

                    <Field>
                        <Label>Kontakt 1 — telefon</Label>
                        <Input
                            value={values.contacts[0].phone}
                            onChange={setContactField(0, "phone")}
                            placeholder="np. 500 123 456"
                        />
                    </Field>
                </Row>

                <Row>
                    <Field>
                        <Label>Kontakt 2 — osoba</Label>
                        <Input
                            value={values.contacts[1].person}
                            onChange={setContactField(1, "person")}
                            placeholder="opcjonalnie"
                        />
                    </Field>

                    <Field>
                        <Label>Kontakt 2 — telefon</Label>
                        <Input
                            value={values.contacts[1].phone}
                            onChange={setContactField(1, "phone")}
                            placeholder="opcjonalnie"
                        />
                    </Field>
                </Row>

                <Row>
                    <Field>
                        <Label>Kontakt 3 — osoba</Label>
                        <Input
                            value={values.contacts[2].person}
                            onChange={setContactField(2, "person")}
                            placeholder="opcjonalnie"
                        />
                    </Field>

                    <Field>
                        <Label>Kontakt 3 — telefon</Label>
                        <Input
                            value={values.contacts[2].phone}
                            onChange={setContactField(2, "phone")}
                            placeholder="opcjonalnie"
                        />
                    </Field>
                </Row>

                <Field>
                    <Label>Link Google Maps</Label>
                    <Input
                        value={values.mapUrl}
                        onChange={setField("mapUrl")}
                        placeholder="Wklej link z Google Maps"
                    />
                </Field>

                <Field>
                    <Label>Notatka</Label>
                    <Textarea
                        value={values.note}
                        onChange={setField("note")}
                        placeholder="np. brama od tyłu, dzwonić przed wjazdem..."
                        rows={3}
                    />
                </Field>

                <Actions>
                    <Button $variant="primary" type="submit" disabled={!isValid}>
                        {mode === "edit" ? "Zapisz zmiany" : "Dodaj"}
                    </Button>

                    {mode === "edit" && (
                        <Button type="button" onClick={onCancelEdit}>
                            Anuluj
                        </Button>
                    )}
                </Actions>
            </Form>
        </Card>
    );
};