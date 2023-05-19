<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-window v-model="window">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-card-text class="mt-12">
                                        <div style="align-items: center;display: flex; justify-content: center;">
                                            <v-btn plain @click="window = 1">Signin</v-btn>
                                            <span class="grey--text">Or</span>
                                            <v-btn plain @click="window = 2">SignUp</v-btn>
                                        </div>
                                        <v-row>
                                            <v-text-field label="Email" outlined dense color="blue" autocomplete="off"
                                                class="mt-16"></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field label="Password" outlined dense color="blue" autocomplete="off"
                                                type="password"></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="7">
                                                <v-checkbox label="Remember me?" class="mt-n1" color="blue"></v-checkbox>
                                            </v-col>
                                            <v-col cols="12" sm="5">
                                                <span class="caption blue--text" @click="forgetPassword">Forget
                                                    password</span>
                                            </v-col>
                                        </v-row>
                                        <v-btn class="primary" dark block tile @click="login">Login in</v-btn>
                                        <h5 class="text-center grey--text pt-5">Or signin with..</h5>
                                        <div
                                            style="align-items: center;display: flex; justify-content: center; padding-top: 10px;">
                                            <v-btn depressed outlined color="grey">
                                                <v-icon color="red">mdi-google</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" sm="6" class="primary rounded-b1-x1">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center">Holaaa</h3>
                                        </v-card-text>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-row>
                                <v-col cols="12" sm="6" class="primary rounded-br-x1">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center">Holaaa</h3>
                                            <fa :icon="['fas', 'adjust']"  />

                                        </v-card-text>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text class="mt-12">
                                        <div style="align-items: center;display: flex; justify-content: center;">
                                            <v-btn plain @click="window = 1">Signin</v-btn>
                                            <span class="grey--text">Or</span>
                                            <v-btn plain @click="window = 2">SignUp</v-btn>
                                        </div>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogForgotPassword" max-width="500px">
            <v-card>
                <v-card-title>Forgot Password??</v-card-title>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
import loadingComponent from '../components/utils/loadingComponent.vue';
export default {
    components: loadingComponent,
    data() {
        return {
            window: 1,
            dialogForgotPassword: false
        }
    },
    methods: {
        login(){
            this.$store.state.userData={}
            this.$store.state.userData.state= true
            this.$router.replace({ path: '/Dashboards/Admin' })
        },
        forgetPassword(){}
    }
}
</script>

<style></style>