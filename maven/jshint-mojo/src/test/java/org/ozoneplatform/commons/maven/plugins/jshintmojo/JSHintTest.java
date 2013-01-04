package org.ozoneplatform.commons.maven.plugins.jshintmojo;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import org.ozoneplatform.commons.maven.plugins.jshintmojo.JSHint.Error;

public class JSHintTest {
	
	@Test
	public void supportsTheGlobalsParameter(){
		// given
		final String globals = "someGlobal";
		final String options = "undef";
		final InputStream code = new ByteArrayInputStream("(function(){var value = someGlobal();}());".getBytes());
		final JSHint jsHint = new JSHint();
		
		// when
		List<JSHint.Error> errors = jsHint.run(code, options, globals);
		
		// then
		Assert.assertNotNull(errors);
		Assert.assertEquals("Expected no errors, but received:\n " + toString(errors), 0, errors.size());
	}

	private String toString(List<Error> errors) {
		StringBuffer text = new StringBuffer();
		for(Error error: errors){
			text.append(error.reason + "\n");
		}
		return text.toString();
	}
}
