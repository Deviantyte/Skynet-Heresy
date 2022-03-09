export class DarkHeresyItem extends Item {
    async sendToChat() {
        const item = new CONFIG.Item.documentClass(this.data._source);
        const html = await renderTemplate("systems/dark-heresy/template/chat/item.html", {item, data: item.data.data});
        const chatData = {
            user: game.user.id,
            rollMode: game.settings.get("core", "rollMode"),
            content: html,
        };
        if (["gmroll", "blindroll"].includes(chatData.rollMode)) {
            chatData.whisper = ChatMessage.getWhisperRecipients("GM");
        } else if (chatData.rollMode === "selfroll") {
            chatData.whisper = [game.user];
        }
        ChatMessage.create(chatData);
    }


    // TODO convert to config file
    get Clip() { return `${this.clip.value}/${this.clip.max}` }

    get RateOfFire() {
        let rof = this.rateOfFire
        let single = rof.single > 0 ? "S" : "-";
        let burst = rof.burst > 0 ? `${rof.burst}` : "-";
        let full = rof.full > 0 ? `${rof.full}` : "-";
        return `${single}/${burst}/${full}`
    }

    get DamageTypeShort() {
        switch (this.damageType) {
            case "energy":
              return game.i18n.localize("DAMAGE_TYPE.ENERGY_SHORT");
            case "impact":
              return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
            case "rending":
              return game.i18n.localize("DAMAGE_TYPE.RENDING_SHORT");
            case "explosive":
              return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE_SHORT");
            default:
              return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
          }
    }

    get DamageType() {
      switch (this.damageType) {
          case "energy":
            return game.i18n.localize("DAMAGE_TYPE.ENERGY");
          case "impact":
            return game.i18n.localize("DAMAGE_TYPE.IMPACT");
          case "rending":
            return game.i18n.localize("DAMAGE_TYPE.RENDING");
          case "explosive":
            return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE");
          default:
            return game.i18n.localize("DAMAGE_TYPE.IMPACT");
        }
  }

    get WeaponClass() {

        switch (this.class) {
          case "melee":
            return game.i18n.localize("WEAPON.MELEE");
          case "thrown":
            return game.i18n.localize("WEAPON.THROWN");
          case "launched":
            return game.i18n.localize("WEAPON.LAUNCHED");
          case "placed":
            return game.i18n.localize("WEAPON.PLACED");
          case "pistol":
            return game.i18n.localize("WEAPON.PISTOL");
          case "basic":
            return game.i18n.localize("WEAPON.BASIC");
          case "heavy":
            return game.i18n.localize("WEAPON.HEAVY");
          case "vehicle":
            return game.i18n.localize("WEAPON.VEHICLE");
          default:
            return game.i18n.localize("WEAPON.MELEE");
        }
    }
    get WeaponType() {

        switch (this.subtype) {
            case "las" : 
                return game.i18n.localize("WEAPON.LAS")
            case "solidprojectile" : 
                return game.i18n.localize("WEAPON.SOLIDPROJECTILE")
            case "bolt" : 
                return game.i18n.localize("WEAPON.BOLT")
            case "melta" : 
                return game.i18n.localize("WEAPON.MELTA")
            case "plasma" : 
                return game.i18n.localize("WEAPON.PLASMA")
            case "flame" : 
                return game.i18n.localize("WEAPON.FLAME")
            case "lowtech" : 
                return game.i18n.localize("WEAPON.LOWTECH")
            case "launcher" : 
                return game.i18n.localize("WEAPON.LAUNCHER")
            case "explosive" : 
                return game.i18n.localize("WEAPON.EXPLOSIVE")
            case "exotic" : 
                return game.i18n.localize("WEAPON.EXOTIC")
            case "chain" : 
                return game.i18n.localize("WEAPON.CHAIN")
            case "power" : 
                return game.i18n.localize("WEAPON.POWER")
            case "shock" : 
                return game.i18n.localize("WEAPON.SHOCK")
            case "force" : 
                return game.i18n.localize("WEAPON.FORCE")
        }
    }

    get Craftsmanship() {
        switch (this.craftsmanship) {
            case "poor":
              return game.i18n.localize("CRAFTSMANSHIP.POOR");
            case "common":
              return game.i18n.localize("CRAFTSMANSHIP.COMMON");
            case "good":
              return game.i18n.localize("CRAFTSMANSHIP.GOOD");
            case "best":
              return game.i18n.localize("CRAFTSMANSHIP.BEST");
            default:
              return game.i18n.localize("CRAFTSMANSHIP.COMMON");
          }
    }

    get Availability() {
        switch (this.availability) {
            case "ubiquitous":
              return game.i18n.localize("AVAILABILITY.UBIQUITOUS");
            case "abundant":
              return game.i18n.localize("AVAILABILITY.ABUNDANT");
            case "plentiful":
              return game.i18n.localize("AVAILABILITY.PLENTIFUL");
            case "common":
              return game.i18n.localize("AVAILABILITY.COMMON");
            case "average":
              return game.i18n.localize("AVAILABILITY.AVERAGE");
            case "scarce":
              return game.i18n.localize("AVAILABILITY.SCARCE");
            case "rare":
              return game.i18n.localize("AVAILABILITY.RARE");
            case "very-rare":
              return game.i18n.localize("AVAILABILITY.VERY_RARE");
            case "extremely-rare":
              return game.i18n.localize("AVAILABILITY.EXTREMELY_RARE");
            case "near-unique":
              return game.i18n.localize("AVAILABILITY.NEAR_UNIQUE");
            case "Unique":
              return game.i18n.localize("AVAILABILITY.UNIQUE");
            default:
              return game.i18n.localize("AVAILABILITY.COMMON");
          }
    }

    get ArmourType() {
        switch (this.subtype) {
            case "basic":
              return game.i18n.localize("ARMOUR_TYPE.BASIC");
            case "flak":
              return game.i18n.localize("ARMOUR_TYPE.FLAK");
            case "mesh":
              return game.i18n.localize("ARMOUR_TYPE.MESH");
            case "carapace":
              return game.i18n.localize("ARMOUR_TYPE.CARAPACE");
            case "power":
              return game.i18n.localize("ARMOUR_TYPE.POWER");
            default:
              return game.i18n.localize("ARMOUR_TYPE.COMMON");
          }
    }

    get Part() {
        let part = this.part
        let parts = [];
        if (part.head > 0) parts.push(`${game.i18n.localize("ARMOUR.HEAD")} (${part.head})`);
        if (part.leftArm > 0) parts.push(`${game.i18n.localize("ARMOUR.LEFT_ARM")} (${part.leftArm})`);
        if (part.rightArm > 0) parts.push(`${game.i18n.localize("ARMOUR.RIGHT_ARM")} (${part.rightArm})`);
        if (part.body > 0) parts.push(`${game.i18n.localize("ARMOUR.BODY")} (${part.body})`);
        if (part.leftLeg > 0) parts.push(`${game.i18n.localize("ARMOUR.LEFT_LEG")} (${part.leftLeg})`);
        if (part.rightLeg > 0) parts.push(`${game.i18n.localize("ARMOUR.RIGHT_LEG")} (${part.rightLeg})`);
        return parts.join(" / ");
    }

    get PartLocation() {
        switch (this.part) {
            case "head":
              return game.i18n.localize("ARMOUR.HEAD");
            case "leftArm":
              return game.i18n.localize("ARMOUR.LEFT_ARM");
            case "rightArm":
              return game.i18n.localize("ARMOUR.RIGHT_ARM");
            case "body":
              return game.i18n.localize("ARMOUR.BODY");
            case "leftLeg":
              return game.i18n.localize("ARMOUR.LEFT_LEG");
            case "rightLeg":
              return game.i18n.localize("ARMOUR.RIGHT_LEG");
            default:
              return game.i18n.localize("ARMOUR.BODY");
          }
    }

    get PsychicPowerZone() {
        switch (this.damage.zone) {
            case "bolt":
              return game.i18n.localize("PSYCHIC_POWER.BOLT");
            case "barrage":
              return game.i18n.localize("PSYCHIC_POWER.BARRAGE");
            case "storm":
              return game.i18n.localize("PSYCHIC_POWER.STORM");
            default:
              return game.i18n.localize("PSYCHIC_POWER.BOLT");
          }
    }

    get isInstalled() { return this.installed ?
         game.i18n.localize("Yes") : 
         game.i18n.localize("No")
    }


    get isMentalDisorder() { return this.type === "mentalDisorder"; }
    get isMalignancy() { return this.type === "malignancy"; }
    get isMutation() { return this.type === "mutation"; }
    get isTalent() { return this.type === "talent"; }
    get isTrait() { return this.type === "trait"; }
    get isAptitude() { return this.type === "aptitude"; }
    get isSpecialAbility() { return this.type === "specialAbility"; }
    get isPsychicPower() { return this.type === "psychicPower"; }
    get isCriticalInjury() { return this.type === "criticalInjury"; }
    get isWeapon() { return this.type === "weapon"; }
    get isArmour() { return this.type === "armour"; }
    get isGear() { return this.type === "gear"; }
    get isDrug() { return this.type === "drug"; }
    get isTool() { return this.type === "tool"; }
    get isCybernetic() { return this.type === "cybernetic"; }
    get isWeaponModification() { return this.type === "weaponModification"; }
    get isAmmunition() { return this.type === "ammunition"; }
    get isForceField() { return this.type === "forceField"; }
    get isAbilities() { return this.isTalent || this.isTrait || this.isSpecialAbility; }

    get craftsmanship() { return this.data.data.craftsmanship}
    get description() { return this.data.data.description}
    get availability() { return this.data.data.availability}
    get weight() { return this.data.data.weight}
    get quantity() { return this.data.data.quantity}
    get effect() { return this.data.data.effect}
    get weapon() { return this.data.data.weapon}
    get source() { return this.data.data.source}
    get subtype() { return this.data.data.type}
    get part() { return this.data.data.part}
    get maxAgility() { return this.data.data.maxAgility}
    get installed() { return this.data.data.installed}
    get shortDescription() { return this.data.data.shortDescription}
    get protectionRating() { return this.data.data.protectionRating}
    get overloadChance() { return this.data.data.overloadChance}
    get cost() { return this.data.data.cost}
    get prerequisite() { return this.data.data.prerequisite}
    get action() { return this.data.data.action}
    get focusPower() { return this.data.data.focusPower}
    get range() { return this.data.data.range}
    get sustained() { return this.data.data.sustained}
    get psychicType() { return this.data.data.subtype}
    get damage() { return this.data.data.damage}
    get benefit() { return this.data.data.benefit}
    get prerequisites() { return this.data.data.prerequisites}
    get aptitudes() { return this.data.data.aptitudes}
    get tier() { return this.data.data.tier}
    get class() { return this.data.data.class}
    get rateOfFire() { return this.data.data.rateOfFire}
    get damageType() { return this.data.data.damageType || this.data.data?.damage?.type || this.data.data.effect?.damage?.type || this.data.data.type}
    get penetration() { return this.data.data.penetration}
    get clip() { return this.data.data.clip}
    get reload() { return this.data.data.reload}
    get special() { return this.data.data.special}
    get attack() { return this.data.data.attack}
    get upgrades() { return this.data.data.upgrades}

}