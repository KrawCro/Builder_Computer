"use strict";
class Computadora {
    procesador;
    ram;
    ssd;
    grafica;
    wifi;
    bluetooth;
    constructor(procesador, ram, ssd, grafica, wifi, bluetooth) {
        this.procesador = procesador;
        this.ram = ram;
        this.ssd = ssd;
        this.grafica = grafica;
        this.wifi = wifi;
        this.bluetooth = bluetooth;
    }
}
class ComputadoraBuilder {
    procesador = "";
    ram = "";
    ssd = "";
    grafica = "";
    wifi = false;
    bluetooth = false;
    setProcesador(procesador) {
        this.procesador = procesador;
        return this;
    }
    setRAM(ram) {
        this.ram = ram;
        return this;
    }
    setSSD(ssd) {
        this.ssd = ssd;
        return this;
    }
    setGrafica(grafica) {
        this.grafica = grafica;
        return this;
    }
    setWiFi(wifi) {
        this.wifi = wifi;
        return this;
    }
    setBluetooth(bluetooth) {
        this.bluetooth = bluetooth;
        return this;
    }
    build() {
        return new Computadora(this.procesador, this.ram, this.ssd, this.grafica, this.wifi, this.bluetooth);
    }
}
const gamer = new ComputadoraBuilder()
    .setProcesador("Intel i7")
    .setRAM("32GB")
    .setSSD("1TB NVMe")
    .setGrafica("RTX 4060")
    .setWiFi(true)
    .setBluetooth(true)
    .build();
console.log(gamer);
