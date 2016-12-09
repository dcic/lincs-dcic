
# gctx2gct.py
import getopt
import os, sys
sys.path.append('l1ktools-zichen/python')
import cmap.io.gct as gct

USAGE = 'python gctx2gct.py -f your_file.gctx'

def gctx2gct(filepath):
	g = gct.GCT()

	try:
		print "Reading..."
		g._read_gctx(filepath)
		print "Writing..."
		g.write(filepath.replace('.gctx','.gct'), mode='gct')
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
			if arg.split('.')[1] != 'gctx':
				print >> sys.stderr, "ERROR: Please provide a gctx file."
				sys.exit()
			else:
				path = arg
		else:
			print >> sys.stderr, "ERROR: Unrecognized arguements."
			sys.exit()
	gctx2gct(path)

if __name__ == "__main__":
	main(sys.argv[1:])