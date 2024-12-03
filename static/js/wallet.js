import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui-js";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";

export class WalletManager {
    constructor() {
        this.accounts = [];
        this.init();
    }

    async init() {
        this.selector = await setupWalletSelector({
            network: "testnet",
            modules: [setupMyNearWallet(), setupHereWallet()],
        });

        this.modal = setupModal(this.selector, {
            contractId: "test.testnet",
        });

        this.setupEventListeners();
        await this.checkConnection();
    }

    async checkConnection() {
        try {
            const state = this.selector.store.getState();
            this.accounts = state.accounts;
            
            if (this.accounts.length > 0) {
                this.wallet = await this.selector.wallet();
                window.updateWalletUI(this.accounts[0].accountId);
            } else {
                window.updateWalletUI(null);
            }
        } catch (error) {
            console.error("Error checking wallet connection:", error);
            window.updateWalletUI(null);
        }
    }

    setupEventListeners() {
        const connectButton = document.getElementById('open-walletselector-button');
        
        connectButton?.addEventListener('click', () => this.modal.show());
        
        // Listen for wallet selection
        this.selector.store.observable.subscribe(async (state) => {
            this.accounts = state.accounts;
            
            if (this.accounts.length > 0) {
                this.wallet = await this.selector.wallet();
                window.updateWalletUI(this.accounts[0].accountId);
                
                // Add click event listener to logout button
                const logoutButton = document.getElementById('logout-button');
                if (logoutButton) {
                    logoutButton.addEventListener('click', () => this.disconnect());
                }
            } else {
                window.updateWalletUI(null);
            }
        });
    }

    async disconnect() {
        if (this.wallet) {
            try {
                await this.wallet.signOut();
                this.accounts = [];
                this.wallet = null;
                window.updateWalletUI(null);
            } catch (error) {
                console.error("Error disconnecting wallet:", error);
            }
        }
    }
}
