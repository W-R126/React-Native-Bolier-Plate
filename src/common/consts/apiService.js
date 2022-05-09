import axios from 'axios';
import { API_URL } from '@env'
import { jsonToQueryParams } from '../utils';

class ApiService {
    constructor() {
        axios.defaults.baseURL = API_URL;
        let service = axios.create();

        service.interceptors.request.use(function (config) {
            try {
                config.headers.common['Authorization'] = 'Bearer ' + 'access_token';
                config.headers.common['Content-Type'] = 'application/json';
            }
            catch (err) {

            }
            return config;
        }, function (error) {
            this.handleError(error)
            return Promise.reject(error);
        });

        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        console.log(response.data, " success")
        return response.data;
    }

    handleError = (error) => {
        const response = {
            success: false,
        }

        if (error && error.response && error.response.status === 401) {
            // logout unauthorized
        } else {

        }

        return response;
    }

    async get(path, params) {
        const url = path + (params ? jsonToQueryParams(params) : '');
        return await this.service.get(url);
    }

    async patch(path, payload) {
        return await this.service.request({
            method: 'PATCH',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }

    async put(path, payload) {
        return await this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }

    async post(path, payload) {
        return await this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }

    async delete(path, payload) {
        return await this.service.request({
            method: 'DELETE',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }
}

export default new ApiService();