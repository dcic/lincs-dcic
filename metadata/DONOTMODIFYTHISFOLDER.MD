The files within the 'metadata' folder are used as part of an external service (UniChem).
LINCS-DCIC and BD2K-LINCS serve the files within cells, LDS, and SmallMolecules folders
as such http://www.bd2k-lincs.org/metadata/SmallMolecules/CompoundTable_LINCS_StandardizedCmpds_LSMIDs_INCHI.txt.

UniChem also requires that the files be served with the "Last-Modified" HTTP header. To do so,
the `router.php` file in the root directory checks whether a requred URL is a GET request for a
'.txt' file. If so, generate a "Last-Modified" header and send the file along with the updated header
in the HTTP request. If not, simply load the requested page.

For any questions regarding this service, contact Caty Chung [ c.chung { at } med.miami.edu ].
