function checkReaction(event, reaction)
{
    num = event.target.value / 10;

    if (num < 1)
    {
        reaction.innerHTML = 0;
    }
    else if (num >= 10)
    {
        reaction.innerHTML = event.target.value[0] + event.target.value[1];
    }
    else{
        reaction.innerHTML = event.target.value[0];
    }
}

function checkMovement(event, movement)
{
    movement.innerHTML = event.target.value * 5;
}

function changeOwnership(event, lightArmor, mediumArmor, heavyArmor, shield, knife, cleaver, stick, mace, hammer, axe,
    bigAxe, spear, longBlade, shortBlade, shortBow, longBow, lightCrossbow, heavyCrossbow)
{
    if(event.target.value == "")
    {
        lightArmor.value = "нет";
        mediumArmor.value = "нет";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "нет";
        cleaver.value = "нет";
        stick.value = "нет";
        mace.value = "нет";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Стражник")
    {
        lightArmor.value = "да";
        mediumArmor.value = "да";
        heavyArmor.value = "нет";
        shield.value = "да";
        knife.value = "нет";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "нет";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "да";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Ученик волшебника")
    {
        lightArmor.value = "да";
        mediumArmor.value = "нет";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "да";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "нет";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Алхимик")
    {
        lightArmor.value = "да";
        mediumArmor.value = "нет";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "да";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "нет";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Механик")
    {
        lightArmor.value = "да";
        mediumArmor.value = "да";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "нет";
        cleaver.value = "нет";
        stick.value = "нет";
        mace.value = "да";
        hammer.value = "да";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Ученик вора")
    {
        lightArmor.value = "да";
        mediumArmor.value = "нет";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "да";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "нет";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "да";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Купец")
    {
        lightArmor.value = "да";
        mediumArmor.value = "нет";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "нет";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "да";
        hammer.value = "нет";
        axe.value = "нет";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
    if(event.target.value == "Ученик кузнеца")
    {
        lightArmor.value = "да";
        mediumArmor.value = "да";
        heavyArmor.value = "нет";
        shield.value = "нет";
        knife.value = "нет";
        cleaver.value = "нет";
        stick.value = "да";
        mace.value = "нет";
        hammer.value = "да";
        axe.value = "да";
        bigAxe.value = "нет";
        spear.value = "нет";
        longBlade.value = "нет";
        shortBlade.value = "нет";
        shortBow.value = "нет";
        longBow.value = "нет";
        lightCrossbow.value = "нет";
        heavyCrossbow.value = "нет";
    }
}

function changeCharacteristics(event, power, dexterity, endurance)
{
    if (event.target.value == "")
    {
        power.max = "200";
        dexterity.max = "200";
        endurance.max = "200";
    }
    if (event.target.value == "Человек")
    {
        power.max = "205";
        dexterity.max = "205";
        endurance.max = "205";
    }
    if (event.target.value == "Орк")
    {
        power.max = "220";
        dexterity.max = "200";
        endurance.max = "220";
    }
    if (event.target.value == "Эльф высших кровей")
    {
        power.max = "200";
        dexterity.max = "200";
        endurance.max = "200";
    }
    if (event.target.value == "Эльф бледных кровей")
    {
        power.max = "200";
        dexterity.max = "205";
        endurance.max = "200";
    }
    if (event.target.value == "Эльф лесных кровей")
    {
        power.max = "200";
        dexterity.max = "230";
        endurance.max = "200";
    }
    if (event.target.value == "Людо-волк")
    {
        power.max = "210";
        dexterity.max = "200";
        endurance.max = "200";
    }
    if (event.target.value == "Людо-кот")
    {
        power.max = "200";
        dexterity.max = "210";
        endurance.max = "200";
    }
    if (event.target.value == "Людо-ящер")
    {
        power.max = "200";
        dexterity.max = "200";
        endurance.max = "200";
    }
    if (event.target.value == "Людо-птица")
    {
        power.max = "200";
        dexterity.max = "200";
        endurance.max = "200";
    }
}
