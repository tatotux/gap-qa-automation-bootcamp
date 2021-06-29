/*
Usually when you buy something, you're asked whetheryour credit card number, 
phonenumber or answer to your most secret question is still correct. However,
since someone could look over your shoulder, you don't want that shown on your screen. Instead, wemask it.
 Your task is to write a function maskify, which changesall but the last four characters into'#'.
*/

function maskify (Data)
{
    return Data.slice(0, -4).replace(/./g, '#') + Data.slice(-4);
}
  maskify("Hola mundo departe de CR");


  