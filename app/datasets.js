'use strict';

module.exports = {

    camelCase: function()
    {
        var str = '__test.your.skills__--';
        return [str];
    },

    capitalize: function()
    {
        var str = 'CAPITALIZE';
        return [str];
    },

    deburr: function()
    {
        var str = 'schön résumé and café';
        return [str];
    },

    endsWith1: function()
    {
        var str1 = 'juice';
        var str2 = 'ice';

        return [str1,str2];
    },

    endsWith2: function(){

        var str1 = 'Triangle';
        var str2 = 'ang';
        var pos = 6;
      return [str1,str2,pos];
    },

    escape: function()
    {
        var str = '<script> R&B <"> ';
        return [str];
    },

    escapeRegExp: function()
    {
        var str = '[url] /Reg(exp){2}erience/ (https://google.com/) [url]';
        return [str];
    },

    kebabCase: function()
    {
        var str = 'KeepCalmAndEatKebabs';
        return [str];
    },

    lowerCase: function()
    {
        var param = '_SOMETHING_RANDOM_-Lorem-Ipsum-';
        return [param];
    },

    pad1: function()
    {
        var str = 'padding';
        var len = 10;
        return [str,len];
    },
    pad2: function()
    {
        var str = 'otherPadding';
        var str2 = '-=';
        var len = 18;
        return [str,len, str2];
    },
    
    padEnd1: function()
    {
        var str = 'fooBar';
        var len = 10;
        return [str,len];
    },

    padEnd2: function()
    {
        var str = 'randomWord';
        var str2 = '->'
        var len = 18;
        return [str,len,str2];
    },

    padStart1: function()
    {
        var str = 'ConvertMe';
        var len = 14;

        return [str,len];
    },

    padStart2: function()
    {
        var str = 'ConvertMeToo';
        var str2 = '.:'
        var len = 19;

        return [str,len,str2];
    },
    
    parseInt: function()
    {
        var str = '0021';
        
        return [str];
    },

    repeat: function()
    {
        var str = '*';
        var n = 5;
        return [str,n];
    },

    replace: function()
    {
        var str1= 'Hello Alex';
        var str2 = 'Alex';
        var str3 = 'Greg';
        return [str1,str2,str3];
    },



    snakeCase: function()
    {
        var str ='--iAm-Python ';
        return [str];
    },

    split: function()
    {
        var str = 'cut-the-values';
        var str2 = '-';
        var limit = 3;
    
        return [str,str2,limit];
    },
    
    startCase: function()
    {
        var str = '--start-with-case-';
        return [str];
    },

    startsWith: function()
    {
        var str = 'lorem ipsum ...';
        var str2 = 'lo';
        return [str, str2];
    },

    toLower: function()
    {
        var str = '--Another-ONE-';
        return [str];
    },

    
    toUpper: function()
    {
        var str = '--And Another-';
        return [str];
    },

    trim: function()
    {
        var str1 = '-_-Thats interesting-_-';
        var str2 = '-_-';

        return [str1,str2];
    },


    flow: function()
    {
        
    }
};
