A $60 item recives a 20% discount and a tax is 8%

PROCEDURE applyDiscount (cost, cpercentDiscounted)
{
    temp <-- 100 - percentDiscounted
    temp <-- temp / 100
    cost <-- cost x temp
    Print(cost)
}
PROCEDURE applytax (cost, cpercentDiscounted)
{
    temp <-- 100 + percentTaxed
    temp <-- temp / 100
    cost <-- cost x temp
    Print(cost)
}

PROCEDURE convet Fahrenheit (tempature)
{
    Celsius <-- tempature - 32
    Celsius <-- Celsius x 5/9
    Print (Celsius)
}