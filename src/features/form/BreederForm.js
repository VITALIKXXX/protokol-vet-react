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

const empty = { name: "", contactName: "", phone: "", mapUrl: "", note: "" };

export const BreederForm = ({ mode, initialValues, onCreate, onUpdate, onCancelEdit }) => {
    const [values, setValues] = useState(empty);

    useEffect(() => {
        if (mode === "edit" && initialValues) {
            setValues({
                name: initialValues.name || "",
                contactName: initialValues.contactName || "",
                phone: initialValues.phone || "",
                mapUrl: initialValues.mapUrl || "",
                note: initialValues.note || "",
            });
            return;
        }
        setValues(empty);
    }, [mode, initialValues]);

    const setField = (key) => (e) => {
        setValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

    const isValid = values.name.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;

        const payload = {
            name: values.name.trim(),
            contactName: values.contactName.trim(),
            phone: values.phone.trim(),
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
                <Row>
                    <Field>
                        <Label>Nazwa hodowcy *</Label>
                        <Input value={values.name} onChange={setField("name")} />
                    </Field>

                </Row>

                <Row>
                    <Field>
                        <Label>Osoba kontaktowa (imię)</Label>
                        <Input value={values.contactName} onChange={setField("contactName")} placeholder="np. Jan" />
                    </Field>

                    <Field>
                        <Label>Telefon</Label>
                        <Input value={values.phone} onChange={setField("phone")} placeholder="np. +48 500 123 456" />
                    </Field>
                </Row>

                <Field>
                    <Label>Link Google Maps</Label>
                    <Input
                        value={values.mapUrl}
                        onChange={setField("mapUrl")}
                        placeholder="Wklej link z „Udostępnij” w Google Maps"
                    />
                </Field>

                <Field>
                    <Label>Notatka</Label>
                    <Textarea
                        value={values.note}
                        onChange={setField("note")}
                        placeholder="np. brama od tyłu, zadzwoń przed wjazdem..."
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