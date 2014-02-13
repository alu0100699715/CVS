var assert = chai.assert;

suite('CVS', function() {
	test('Comprobamos la tabla', function() {
		original.value = "\"oooogggh\",\"eeegh\"\n\"si no\",katapum";
		calculate();
		assert.deepEqual(result.innerHTML, "\n<tbody><tr>\t<td>oooogggh</td>\t<td>eeegh</td></tr>\n<tr>\t<td>si no</td>\t<td>katapum</td></tr>\n</tbody>");
	});
	test('¿Hay error?', function() {
		original.value = "\"oooogggh\",\"eeegh\"\n\"si no\"";
		calculate();
		assert.isNotNull(result.innerHTML.match(/class=\"error\"/));
	});
	test('¿No hay error?', function() {
		original.value = "\"oooogggh\",\"eeegh\"\n\"si no\",katapum";
		calculate();
		assert.isNull(result.innerHTML.match(/class=\"error\"/));
	});
});