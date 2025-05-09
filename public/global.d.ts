interface Window {
    chrome: any;
    cast: any;
    overrides: {
        [key: string]: any;
        "xdg-open"?: (mime: string) => void;
    };
    BEARER_TOKEN?: string;
}