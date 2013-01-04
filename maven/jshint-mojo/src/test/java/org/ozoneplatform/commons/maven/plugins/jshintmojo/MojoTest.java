package org.ozoneplatform.commons.maven.plugins.jshintmojo;

import static org.ozoneplatform.commons.maven.plugins.jshintmojo.Util.deleteDirectory;
import static org.ozoneplatform.commons.maven.plugins.jshintmojo.Util.mkdirs;
import static org.ozoneplatform.commons.maven.plugins.jshintmojo.Util.tempDir;
import static junit.framework.Assert.*;

import java.io.File;
import java.util.Collections;

import org.junit.Test;

public class MojoTest {
	
	@Test
	public void warnsUsersWhenConfiguredToWorkWithNonexistentDirectories() throws Exception {
		File directory = tempDir();
		try{
			// given
			mkdirs(directory, "src/main/resources");
			LogStub log = new LogStub();
			Mojo mojo = new Mojo("", "", 
							directory, 
							Collections.singletonList("src/main/resources/nonexistentDirectory"), 
							Collections.<String>emptyList());
			mojo.setLog(log);
			
			// when
			mojo.execute();
			
			// then
			assertEquals(1, log.messagesForLevel("warn").size());
			assertNotNull(log.messagesForLevel("warn").get(0).content);
			
			
		}finally{
			deleteDirectory(directory);
		}
	}
	
}
