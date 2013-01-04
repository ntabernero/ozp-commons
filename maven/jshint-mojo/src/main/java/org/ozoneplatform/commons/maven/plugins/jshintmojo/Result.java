package org.ozoneplatform.commons.maven.plugins.jshintmojo;

import java.io.Serializable;
import java.util.List;

import org.ozoneplatform.commons.maven.plugins.jshintmojo.JSHint.Error;

@SuppressWarnings("serial")
public class Result implements Serializable {
	final String path;
	final Long lastModified;
	final List<Error> errors;
	
	public Result(String path, Long lastModified, List<Error> errors) {
		super();
		this.path = path;
		this.lastModified = lastModified;
		this.errors = errors;
	}
}