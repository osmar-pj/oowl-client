<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                OOWL
            </b-navbar-item>
        </template>
        <template #start>
            <!-- <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </template>

        <!-- <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" disabled>
                        <strong>Registrar</strong>
                    </a>
                    <a class="button is-light" disabled>
                        Ingresar
                    </a>
                </div>
            </b-navbar-item>
        </template> -->
    </b-navbar>
</template>