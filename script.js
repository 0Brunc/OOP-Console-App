class Beast {
  constructor(name, type, rarity, hunger, mood, energy) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.hunger = hunger; // 0/20 (hungry/full)
    this.mood = mood; // 0/20 (grumpy/happy)
    this.energy = energy; // 0/20 (sleepy/energized)
  }
  // Setting Min and Max
  statCap(value, min = 0, max = 20) {
    return Math.max(min, Math.min(value, max));
  }

  // Methods
  feedValue() {
    this.hunger = this.statCap(this.hunger + 5);
    this.mood = this.statCap(this.mood + 3);
    this.energy = this.statCap(this.energy - 3);
  }
  feed() {
    if (this.hunger >= 20) {
      return `${this.name} is full, and doesn't even spare a glance at the food.`;
    } else if (this.hunger >= 16) {
      this.feedValue();
      return `${this.name} nibbles a bit.`;
    } else if (this.hunger <= 15) {
      this.feedValue();
      return `${this.name} enjoys his food!`;
    } else if (this.hunger >= 5) {
      this.feedValue();
      return `${this.name} due to exitment, for this glorious banquet provided, no chewing was involved during this feast.`;
    }
  }

  snack() {
    if (this.hunger >= 20) {
      return `${this.name} is too full for a snack.`;
    }
    this.hunger = this.statCap(this.hunger + 2);
    this.mood = this.statCap(this.mood + 2);
    this.energy = this.statCap(this.energy + 1);

    return `${this.name} happily devours the treats!`;
  }

  // Brush
  brush() {
    if (this.energy <= 2) {
      return `${this.name} doesn't have energy to entertain this, they are tired.`;
    } else {
      this.mood = this.statCap(this.mood + 3);
      this.energy = this.statCap(this.energy - 2);
      return `${this.name} looks much better now!`;
    }
  }

  // Play
  play() {
    if (this.energy <= 2) {
      return `${this.name} seems to be seeing things that aren't there, they look very tired.`;
    } else if (this.hunger <= 3) {
      return `${this.name}'s stomach growls and the sound echos through the vivarium, a meal is overdue!! Now it's not a good time to play.`;
    } else {
      this.hunger = this.statCap(this.hunger - 4);
      this.mood = this.statCap(this.mood + 7);
      this.energy = this.statCap(this.energy - 4);
      return `${this.name} enjoyed to play!`;
    }
  }

  // Sleep
  nap() {
    if (this.energy >= 20) {
      return `${this.name} isn't tired enough to take a nap.`;
    } else if (this.energy <= 4) {
      this.energy = this.statCap(this.energy + 10);
      this.hunger = this.statCap(this.hunger - 4);
      this.mood = this.statCap(this.mood + 3);
      return `${this.name} slept like a log, they seem to have drooled a bit.`;
    } else {
      this.energy = this.statCap(this.energy + 5);
      this.hunger = this.statCap(this.hunger - 2);
      this.mood = this.statCap(this.mood + 2);

      return `${this.name} had a nice nap.`;
    }
  }
}

// Beasts
const demiguise = new Beast('Demiguise', 'Magical Beast', 'Rare', 10, 10, 10);
const bowtruckle = new Beast('Bowtruckle', 'Magical Beast', 'Rare', 10, 10, 10);
const doxy = new Beast('Doxy', 'Magical Beast', 'Rare', 10, 10, 10);
const norwegianRidgeback = new Beast(
  'Norwegian Ridgeback',
  'Dragon',
  'Rare',
  10,
  10,
  10,
);

// Console
console.table([demiguise, norwegianRidgeback, doxy, bowtruckle]);

console.log(demiguise.feed());
console.log(norwegianRidgeback.snack());
console.log(doxy.brush());
console.log(bowtruckle.play());
console.log(bowtruckle.feed());
console.log(bowtruckle.nap());

console.table([demiguise, norwegianRidgeback, doxy, bowtruckle]);
