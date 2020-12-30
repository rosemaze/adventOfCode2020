export interface CurrentTimestampAndBusIntervals {
  currentTimestamp: number;
  buses: Bus[];
}

export interface Bus {
  interval: number;
  gap: number;
}

export interface Equation {
  current: PrimeAndMultiplier;
  next: PrimeAndMultiplier;
  difference: number;
}

export interface PrimeAndMultiplier {
  prime: number;
  multiplier: number;
}

export interface ChineseRemainderMember {
  coprime: number;
  remainder: number;
}
