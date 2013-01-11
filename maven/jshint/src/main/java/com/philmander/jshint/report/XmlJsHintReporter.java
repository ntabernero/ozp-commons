package com.philmander.jshint.report;

import com.philmander.jshint.JsHintReport;

/**
 * Creates xml format reports with the 'jshint' root element
 * @author Phil Mander
 *
 */
public class XmlJsHintReporter extends XmlReporter {

	public XmlJsHintReporter(JsHintReport report) {

		super(report, "jshint");

	}
}
