import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

import InputText from 'primevue/inputtext'; 
import Button from 'primevue/button';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        },
        formField:{
            paddingX: '1rem',
            paddingY: '1rem'
        },
        myButton: {
            paddingX: '2rem',
            paddingY: '1rem'
        },
        colorSchma: {
            light: {
                formField: {
                    hoverBorderColor: '{primary.color}'
                }
            },
            dark:{
                formField: {
                    hoverBorderColor: '{primary.color}'
                },
                surface: {
                    50 : '{slate.50}',
                   100 : '{slate.100}',
                   200 : '{slate.200}',
                   300 : '{slate.300}',
                   400 : '{slate.400}',
                   500 : '{slate.500}',
                   600 : '{slate.600}',
                   700 : '{slate.700}',
                   800 : '{slate.800}',
                   900 : '{slate.900}',
                   950 : '{slate.950}',

                }
            }
        }
    },
    components:{
        button: {
            paddingX: '{my.button.padding.x}',
            paddingY: '{my.button.padding.y}',
        }
    }
});

const app = createApp(App);

app.use(PrimeVue, {
    //Default theme configuration
    theme: {
        preset: MyPreset,
        options: {
         
            darkModeSelector: '.my-app-dark',
          
        }
        
    }
});
app.component("InputText", InputText)
app.component("Button", Button)


app.mount('#app');
