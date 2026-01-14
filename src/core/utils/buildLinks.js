export const buildTelLink = (phone) => {
    const cleaned = String(phone || "").replace(/[^\d+]/g, "");
    return cleaned ? `tel:${cleaned}` : "";
};

export const normalizeMapUrl = (url) => {
    const u = String(url || "").trim();
    if (!u) return "";
    if (u.startsWith("http://") || u.startsWith("https://")) return u;
    return `https://${u}`;
};