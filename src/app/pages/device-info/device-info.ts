import { Component, signal } from '@angular/core';
import { Device } from '@capacitor/device';
import { MobileHeader } from "../../components/mobile-header/mobile-header";
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-device-info',
  imports: [MobileHeader, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem],
  templateUrl: './device-info.html',
  styleUrl: './device-info.css',
})
export class DeviceInfo {
  deviceName = signal('No cargado');
  platform = signal('No cargado');
  osVersion = signal('No cargado');
  manufacturer = signal('No cargado');
  batteryLevel = signal('No cargado');
  isCharging = signal('No cargado');

  async loadDeviceInfo() {
    const info = await Device.getInfo();
    const battery = await Device.getBatteryInfo();

    this.deviceName.set(info.name ?? 'No Disponible');
    this.platform.set(info.platform);
    this.osVersion.set(info.osVersion ?? 'No Disponible');
    this.manufacturer.set(info.manufacturer ?? 'No Disponible');
    this.batteryLevel.set(
      battery.batteryLevel != null ? `${Math.round(battery.batteryLevel * 100)}%` : 'No Disponible',
    );
    this.isCharging.set(
      battery.isCharging != null ? (battery.isCharging ? 'Sí' : 'No') : 'No Disponible',
    );
  }
}
