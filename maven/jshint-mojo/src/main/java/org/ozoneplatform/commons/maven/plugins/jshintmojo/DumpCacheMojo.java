package org.ozoneplatform.commons.maven.plugins.jshintmojo;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;

/**
 * @goal dumpCache
 */
public class DumpCacheMojo extends AbstractMojo {

	/**
	 * @parameter default-value="${basedir}
	 * @readonly
	 * @required
	 */
	private File basedir;
	
	public void execute() throws MojoExecutionException, MojoFailureException {
		try {
			
			final File cachePath = new File(basedir, "target/lint.cache");
			
			final Map<String, Result> entries;
			if(cachePath.exists()){
				entries = Util.readObject(cachePath);
			}else{
				entries = new HashMap<String, Result>();
			}
			
			for(Result r : entries.values()){
				String status = r.errors.isEmpty()?"[OK]":"[BAD]";
				System.out.println(status + " " + r.path);
			}
			
		} catch (Exception e) {
			throw new MojoExecutionException("Something bad happened", e);
		}
	}



}
