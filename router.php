<?php
  if (php_sapi_name() == 'cli-server') {
    $info = parse_url($_SERVER['REQUEST_URI']);

    if ( preg_match('/\.txt/', $_SERVER['REQUEST_URI'])) {
      $file = "./$info[path]";
      // Return resource with modified header
      header('Content-Type: text/plain');
      header("Last-Modified: " . gmdate("D, d M Y H:i:s", filemtime($file)) . " GMT");
      return readfile($file);
    } else {
      // Return resource as is
      return false;
    }
  }
?>
