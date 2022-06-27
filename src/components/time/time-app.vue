<template>
    <div
        class="time"
        :class="'numbedr'+ seconds.toString()[0]"
    >
        <div
            class="time__current"
        >
            <number-clock :number="currentHour" />
            <span>:</span>
            <number-clock :number="minutes" />
            <span>:</span>
            <number-clock :number="seconds" />
        </div>
        {{ currentHour + ':' + minutes +':' + seconds }}
        <div class="time__search">
            <label for="">
                <input type="text" />
                <div class="dropdown">
                    <div
                        v-for="city of filterCity"
                        :key="city"
                        class="dropdown__item"
                        :value="city"
                        @click="selectCity"
                    >
                        {{ city }}
                    </div>
                </div>
            </label>
        </div>
        <div
            v-if="showTime.length"
            class="extra-time"
        >
            <div
                v-for="city of showTime"
                :key="city.timezone"
                class="extra-time__item"
            >
                {{ city.timezone + ' ' + city.datetime }}
                <div
                    class=""
                    :Value="city.timezone"
                    @click="deletCity"
                >
                    ХХ
                </div>
            </div>
        </div>
    </div>
</template>

<script >

import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import numberClock from './number-clock';

export default defineComponent({
    components: {
        numberClock,
    },
    data() {
        return {
            cities: [],
            showTime:[],
            currentHour: '',
            minutes: '',
            seconds: '',
        };
    },
    computed: {
        filterCity() {
            return this.cities.slice(0, 30);
        },
    },

    watch: {
        seconds()  {
            if (this.seconds > 59) {
                this.seconds = 0;
                this.minutes += 1;
            }
        },
    },
    mounted() {
        console.log(moment().format(' HH:mm:ss '));
        this.setTime();
        
        this.axios.get('http://worldtimeapi.org/api/timezone').then((res) => {
            this.cities = res.data;
        });

    },
    methods: {
        selectCity(e) {
            console.log(e.target.getAttribute('value'));
            this.axios.get(`http://worldtimeapi.org/api/timezone/${e.target.getAttribute('value')}`).then((res) => {
               console.log(res.data);
               this.showTime.push(res.data);
            });
        },
        deletCity(e) {
            console.log(e.target.getAttribute('value'));
            this.showTime = this.showTime.filter(item => item.timezone !== e.target.getAttribute('value'));
        },

        setTime() {
            this.currentHour = +moment().format('HH');
            this.minutes = +moment().format('mm');
            this.seconds = +moment().format('ss');
            setInterval(() => {
                this.seconds += 1;

            }, 1000);
        },
    },
});

</script>

<style lang="scss">
.time {
    &__current {
        display: flex;
    }
}

</style>