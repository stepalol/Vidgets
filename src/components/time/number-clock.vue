<template>
    <div class="wraper-clock">
        <div :class="firstNumber">
            <div class="number">
                <div class="number__left"></div>
                <div class="number__center"></div>
                <div class="number__right"></div>
            </div>
        </div>
        <div :class="secondNumber">
            <div></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    props: {
        number: {
            type: Number,
            default: ()=> 0,
        },
    },
    computed: {
        firstNumber() {
            if (this.number.toString().length <2) {
                return 'number0';
            }
            console.log('number' + this.number.toString()[0]);
            return 'number' +this.number.toString()[0];
        },

        secondNumber() {
            if (this.number.toString().length <2) {
                return 'number' + this.number.toString();
            }
            return 'number' + this.number.toString()[1];
        },
    },
});
</script>

<style lang="scss">
.wraper-clock {
    display: flex;
    &>div {
        display: flex;
        width: 40px;
        height: 90px;
        background-color: black;
        margin: 0 5px;

        .number {
            position: relative;
            overflow: hidden;
            width: 33px;
            height: 5px;
                display: flex;
    margin: 0 0 0 4px;
            
            &__left {
                left: 3px;
    position: absolute;
    right: 0;
    width: 10px;
    height: 15px;
    background: red;
    transform: rotate(45deg);
    top: -11px;
            }
            &__center {
                background: red;
    height: 100%;
    width: 100%;
    margin: 0 7px;
            }
            &__right {
                position: absolute;
    right: 0px;
    width: 10px;
    height: 15px;
    background: red;
    transform: rotate(45deg);
    top: -11px;
            }
        }
        // position: relative;
        // & div {
        //     // position: absolute;
        //     position: relative;
        //     width: 5px;
        //     height: 30px;
        //     background: red;
        //     display: block;
        //     // overflow: hidden;
        //     &::before {
        //         position: absolute;
        //         display: block;
        //         content: '';
        //         width: 10px;
        //         height: 4px;
        //         background-color: black;
        //         transform: rotate(50deg);
        //     }
        //     &::after {
        //         position: absolute;
        //         display: block;
        //         content: '';
        //         width: 10px;
        //         height: 70px;
        //         background-color: black;
        //         transform: rotate(50deg);
        //     }

        // }
        // & div:nth-child(1) {
        //     top: 0;
        //     left: 0;
        // }
        // & div:nth-child(2) {
        //     top: 0;
        //     right: 0;
        // }
        // & div:nth-child(3) {
        //     top: 0;
        //     left: 0;
        //     width: 30px;
        //     height: 5px;
        // }
        // & div:nth-child(4) {
        //     bottom: 0;
        //     left: 0;
        // }
        // & div:nth-child(5) {
        //     bottom: 0;
        //     right: 0;
        // }
        // & div:nth-child(6) {
        //     bottom: 0px;
        //     width: 30px;
        //     height: 5px;
        // }
        // & div:nth-child(7) {
        //     top: 40px;
        //     width: 30px;
        //     height: 5px;
        // }
    }
}
</style>


