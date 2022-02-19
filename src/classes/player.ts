import { IsPlayer } from "../interfaces/IsPlayer.js";

export class Player implements IsPlayer {
  //   private name: string;
  //   public age: number;
  //   readonly country: string;

  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
