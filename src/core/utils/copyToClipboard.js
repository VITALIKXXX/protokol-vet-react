export const copyToClipboard = async (text) => {
    const value = String(text || "");
    if (!value) return false;

    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch {
        try {
            const textarea = document.createElement("textarea");
            textarea.value = value;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            const ok = document.execCommand("copy");
            document.body.removeChild(textarea);
            return ok;
        } catch {
            return false;
        }
    }
};