//with evil true and undef false this file should have 3 errors
var x = -1;
if (x++ == 0) {
	y = x * 2;
}
y = 50

eval("x=1")