import { _decorator, Component, Node, ParticleSystem } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayParticle')
export class PlayParticle extends Component {
  @property(ParticleSystem)
  public particleSystem: ParticleSystem = null;

  private onPlayButtonClicked() {
    this.particleSystem.play();
  }
}


