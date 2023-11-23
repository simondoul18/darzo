"use client";

import ConnectionService from "@/services/ConnectionService";
import axios from "axios";

export default class CustomerOrderStatusService extends ConnectionService {
    fetchAllStatuses() {
        return axios.get(this.getApiUrl() + this.endPoint('/customers/orders/statuses'));
    }
}