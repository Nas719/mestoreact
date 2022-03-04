import "./constants.js"
import {baseUrl, token} from "./constants";

class Api {
    constructor(baseUrl, token) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    _parseResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._token
            }
        }).then(this._parseResponse);
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(this._parseResponse);
    }

    removeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }).then(this._parseResponse);
    }

    toggleLike(isLike, cardId) {
        const isLikeOptions = {
            method: '',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        };
        if (!isLike) {
            isLikeOptions.method = 'PUT';
        } else {
            isLikeOptions.method = 'DELETE';
        }
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, isLikeOptions)
            .then(this._parseResponse);
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token
            }
        }).then(this._parseResponse);
    }

    updateUser(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._parseResponse);
    }

    setUserAvatar(avatarUrl) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarUrl
            })
        }).then(this._parseResponse);
    }
}

export const apiManager = new Api(baseUrl, token);