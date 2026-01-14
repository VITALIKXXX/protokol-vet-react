const STORAGE_KEY = "breeders_v1";

export const loadBreeders = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

export const saveBreeders = (breeders) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(breeders));
};

