import { IsPlayer } from "../interfaces/IsPlayer.js";

export class Player implements IsPlayer {
  //   private name: string;
  //   public age: number;
  //   readonly country: string;

  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  getAge() {
    return this.age;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
