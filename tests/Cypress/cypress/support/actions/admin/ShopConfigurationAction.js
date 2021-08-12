import AdminAPIClient from "Services/shopware/AdminAPIClient";


export default class ShopConfigurationAction {

    /**
     *
     */
    constructor() {
        this.apiClient = new AdminAPIClient();
    }


    /**
     *
     */
    setupShop() {

        // activate all payment methods
        this._activatePaymentMethods();

        // assign all payment methods to
        // all available sales channels
        this.apiClient.get('/sales-channel').then(channels => {
            channels.forEach(channel => {
                this._configureSalesChannel(channel.id);
            });
        });

        // configure plugin
        // this._configureMyPlugin(true);
    }

    /**
     *
     * @param testMode
     * @private
     */
    _configureMyPlugin(testMode) {
        const data = {
            "null": {
                "MyPlugin.config.testMode": testMode,
            }
        };

        this.apiClient.post('/_action/system-config/batch', data);
    }

    /**
     *
     * @private
     */
    _activatePaymentMethods() {

        this.apiClient.get('/payment-method').then(payments => {

            payments.forEach(element => {

                const data = {
                    "id": element.id,
                    "active": true,
                };

                this.apiClient.patch('/payment-method/' + element.id, data);
            });
        });
    }

    /**
     *
     * @param id
     * @private
     */
    _configureSalesChannel(id) {

        this.apiClient.get('/payment-method').then(payments => {

            let paymentMethodsIds = [];

            payments.forEach(element => {
                paymentMethodsIds.push({
                    "id": element.id
                });
            });

            const data = {
                "id": id,
                "paymentMethods": paymentMethodsIds
            };

            this.apiClient.patch('/sales-channel/' + id, data);
        });
    }

}
