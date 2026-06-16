import { Box, Card, Title, Text, Loader } from "./WelcomeScreen.styles.js";

export const WelcomeScreen = ({ name }) => {
    return (
        <Box>
            <Card>
                <Title>Witaj, {name || "pracowniku"} 👋</Title>
                <Text>Ładuję bazę hodowców...</Text>
                <Loader />
            </Card>
        </Box>
    );
};