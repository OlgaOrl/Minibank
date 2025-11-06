export default {
  default: {
    import: ['steps/*.js'],
    paths: ['features/*.feature'],
    format: ['progress', 'html:cucumber-report.html'],
    publishQuiet: true,
  },
};

