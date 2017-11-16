var c = []
var testhack = function(){
    window.open("GB_Emu/index.xhtml")
}

	var converter = function(input)
	{
        var stringHexadecimal = ""+input+""
		var returnValues = [];

		var nibblesForByteCurrent = [];

		for (i = 0; i < stringHexadecimal.length; i++)
		{
			var charForNibble = stringHexadecimal[i];
			var nibbleAsInt = parseInt(charForNibble, 16);
			if (isNaN(nibbleAsInt) == false)
			{
				nibblesForByteCurrent.push(nibbleAsInt);
				if (nibblesForByteCurrent.length == 2)
				{
					var byte = 
						(nibblesForByteCurrent[0] << 4) 
						+ nibblesForByteCurrent[1];
					returnValues.push(byte);
					nibblesForByteCurrent.length = 0;
				}
			}			
		}

		return returnValues;
	}	

	var save = function(bytes)
	{
        this.bytes = bytes
		var dataAsArrayBuffer = new ArrayBuffer(this.bytes.length);
		var dataAsArrayUnsigned = new Uint8Array(dataAsArrayBuffer);
	    for (var i = 0; i < this.bytes.length; i++) 
		{
			dataAsArrayUnsigned[i] = this.bytes[i];
		}
    	var dataAsBlob = new Blob([dataAsArrayBuffer], {type:'bytes'});


		var link = document.createElement("a");
		link.href = window.URL.createObjectURL(dataAsBlob);
        if (document.getElementById("filename").value === ""){
            link.download = "data.bin"
        } else {
            link.download = document.getElementById("filename").value
        }
		link.click();
	}


var hexify = function(g){
    if (g === 10){
        g = "a"
    } else if (g === 11){
        g = "b"
    } else if (g === 12){
        g = "c"
    } else if (g === 13){
        g = "d"
    } else if (g === 14){
        g = "e"
    } else if (g === 15){
        g = "f"
    }
    return g
}
var button = function(){
    console.log("button pressed")
    var bytes = document.getElementById("Bytes").value
    var e = bytes.length
    var p = 0
    console.log("started function")
    var i = e/2
    var g = 0, d = 0, a = 0, x = 0, h = 0, w = 0, f = ""
    while(d <= i){
        if (g === 16){
            g = 0
            a += 1
        }
        if (a === 16){
            a = 0
            x += 1
        }
        if (x === 16){
            x = 0
            h += 1
        }
        if (h === 16){
            h = 0
            w += 1
        }
        f += "0x"+hexify(w)+""+hexify(h)+""+hexify(x)+""+hexify(a)+""+hexify(g)+""
        d += 16
        g += 16
    }
    while(e >= 0){
        var counter = e/2 -1
        var b = e - 2
        var res = bytes.substr(b, e)
        c[counter] = res.substr(0, 2)
        e = b
    }
    var t = c.length
    var k = 0
    var j = 0
    var q = ""
    while(t >= 16){
        var u = j + 14
        var n = f.substr(j, u)
        var z = n.substr(0, 7)
        q += ""+z+" "
        var l = k + 15
        j += 7
        while(l >= k){
            q += ""+c[k]+","
            k += 1
        }
        q += " "
        t -= 16
    }
    document.getElementById("output HEX").value = ""+q+""
    document.getElementById("x").value = c[20070]
    document.getElementById("sx").value = c[20071]
    document.getElementById("y").value = c[20068]
    document.getElementById("sy").value = c[20069]
    document.getElementById("items").value = c[20089]
    document.getElementById("beams").value = c[20090]
    document.getElementById("etanks").value = c[20091]
    document.getElementById("chealth").value = c[20092]
    document.getElementById("cetanks").value = c[20093]
    document.getElementById("missilec").value = ""+c[20095]+""+c[20094]+""
    document.getElementById("missiles").value = ""+c[20097]+""+c[20096]+""
    document.getElementById("lava").value = c[20099]
    document.getElementById("spike").value = c[20100]
    document.getElementById("tmetroid").value = c[20101]
    document.getElementById("music").value = c[20102]
    document.getElementById("mtime").value = c[20103]
    document.getElementById("htime").value = c[20104]
    document.getElementById("metroid").value =  c[20105]
}
var encode = function(){
    var value = ""
    var bytes = document.getElementById("Bytes").value
    var str =  document.getElementById("output HEX").value
    var e = str.split(" ");
    var d = 1
    var j = ""
    while (d <= e.length){
        j += ""+e[d]+""
        d += 2
    }
    c = j.split(",")
    c[20070] = document.getElementById("x").value
    c[20071] = document.getElementById("sx").value
    c[20068] = document.getElementById("y").value
    c[20069] = document.getElementById("sy").value
    c[20089] = document.getElementById("items").value
    c[20090] = document.getElementById("beams").value
    c[20091] = document.getElementById("etanks").value
    c[20092] = document.getElementById("chealth").value
    c[20093] = document.getElementById("cetanks").value
    var missile = document.getElementById("missilec").value
    c[20094] = missile.substr(2, 4)
    c[20095] = missile.substr(0, 2)
    var missile = document.getElementById("missiles").value
    c[20096] = missile.substr(2, 4)
    c[20097] = missile.substr(0, 2)
    c[20099] = document.getElementById("lava").value
    c[20100] = document.getElementById("spike").value
    c[20101] = document.getElementById("tmetroid").value
    c[20102] = document.getElementById("music").value
    c[20103] = document.getElementById("mtime").value
    c[20104] = document.getElementById("htime").value
    c[20105] = document.getElementById("metroid").value
    var i = 0
    while(i <= bytes.length){
        value += ""+c[i]+""
        i += 1
    }
    //bytes = value
    var saver = Converter.stringHexadecimalToBytes(value)
    c = saver
    var m = 262143
    var w = []
    var v = 0
    while(v <= m){
        w[v] = saver[v]
        v += 1
    }
    save(w)
    window.alert("encoding complete")
}
var canvas = document.getElementById("Tiles");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
main()