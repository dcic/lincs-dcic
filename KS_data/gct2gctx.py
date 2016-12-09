
# gct2gctx.py
import getopt
import os, sys
sys.path.append('l1ktools-zichen/python')
import cmap.io.gct as gct

USAGE = 'python gct2gctx.py -f your_file.gct'

def gct2gctx(filepath):
	g = gct.GCT()
	try:
		print "Reading..."
		g._read_gct(filepath)
		print "Writing..."
		g.write(filepath.replace('.gct','.gctx'), mode='gctx')
	except:
		print "ERROR: could not process",filepath

def main(argv):
	try:
		opts, args = getopt.getopt(argv,'f:',["file="])
		if not argv:
			print >> sys.stderr, "ERROR: no arguements given\n" + USAGE
			exit(1)
	except getopt.GetoptError:
		print "ERROR: Options error\n" + USAGE
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-f':
			if arg.split('.')[1] != 'gct':
				print >> sys.stderr, "ERROR: Please provide a gct file."
				sys.exit()
			else:
				path = arg
		else:
			print >> sys.stderr, "ERROR: Unrecognized arguements."
			sys.exit()
	gct2gctx(path)

if __name__ == "__main__":
	main(sys.argv[1:])