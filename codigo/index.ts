class Computadora {
  constructor(
    public procesador: string,
    public ram: string,
    public ssd: string,
    public grafica: string,
    public wifi: boolean,
    public bluetooth: boolean
  ) {}
}

class ComputadoraBuilder {
  private procesador: string = "";
  private ram: string = "";
  private ssd: string = "";
  private grafica: string = "";
  private wifi: boolean = false;
  private bluetooth: boolean = false;

  setProcesador(procesador: string): ComputadoraBuilder {
    this.procesador = procesador;
    return this;
  }

  setRAM(ram: string): ComputadoraBuilder {
    this.ram = ram;
    return this;
  }

  setSSD(ssd: string): ComputadoraBuilder {
    this.ssd = ssd;
    return this;
  }

  setGrafica(grafica: string): ComputadoraBuilder {
    this.grafica = grafica;
    return this;
  }

  setWiFi(wifi: boolean): ComputadoraBuilder {
    this.wifi = wifi;
    return this;
  }

  setBluetooth(bluetooth: boolean): ComputadoraBuilder {
    this.bluetooth = bluetooth;
    return this;
  }

  build(): Computadora {
    return new Computadora(
      this.procesador,
      this.ram,
      this.ssd,
      this.grafica,
      this.wifi,
      this.bluetooth
    );
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