export default class ConnectionService {
    private url: string = 'https://api.feuzion.com';

    getUrl(): string {
        return this.url;
    }

    getApiUrl() {
        return this.url + '/api';
    }

    endPoint(chunks: string, queryParams: any = {}): string {
        if (Object.keys(queryParams).length > 0) {
            chunks = chunks + '?';
        }
        return chunks + new URLSearchParams(queryParams).toString();
    }
}