import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function index() {
    return sendRequest(BASE_URL);
}

export function create(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote);
}
