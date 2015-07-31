App.Model.Table = Backbone.Model.extend({

    initialize: function(attributes, options) {
        _.each(this.defaults, function(row) {
            row['metrics'] = options.server_data[row['directory']];
        }, this);
    },

    defaults: [
  {
    "association": "gene-cell line associations by sensitivity of cell line to gene knockdown", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "phenotyping", 
    "isok": "Yes", 
    "directory": "achilles", 
    "resource_url": "http://www.broadinstitute.org/achilles", 
    "number_of_genes": "4831", 
    "data_description": "fitness scores for cell lines following single gene knockdowns", 
    "resource_description": "project screening essentiality of genes in cancer cell lines by measuring proliferation rates following gene knockdowns", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "216", 
    "data_class": "functional genomics", 
    "data_url": "http://www.broadinstitute.org/achilles/datasets/5/download/Achilles_QC_v2.4.3.rnai.Gs.gct;http://www.broadinstitute.org/achilles/datasets/5/download/Achilles_v2.4_SampleInfo_small.txt", 
    "notes": null, 
    "long_description": "The Cancer Target Discovery and Development Network is a cancer phenotyping project that seeks to identify novel cancer drug targets and novel biomarkers for diagnosis of cancer and prediction of drug response.  Libraries of small molecules, cDNA over-expression vectors, and siRNA knockdown vectors are used to perturb molecular signaling pathways in cancer cell lines, and cell fitness is assayed by measuring the rate of cell proliferation.  Achilles is a CTD2 project that performed shRNA-mediated gene knockdown followed by proliferation rate quantification to assess the essentiality of genes for cell proliferation in a panel of cell lines.", 
    "readme_url": "http://www.broadinstitute.org/achilles/datasets/5/download/Achilles_Analysis_README_v2.4.3.txt", 
    "publication": [
      {
        "pmid": "21746896", 
        "citation": "Cheung, H.W. et al. (2011) Systematic investigation of genetic vulnerabilities across cancer cell lines reveals lineage-specific dependencies in ovarian cancer. PNAS. 108:12372-12377.", 
        "author": "Cheung et al."
      }, 
      {
        "pmid": "20829823", 
        "citation": "CTD2 Network (2010) Towards patient-based cancer therapeutics. Nature Biotechnology. 28:904-906.", 
        "author": "CTD2 Network et al."
      }
    ], 
    "resource_name": "Achilles"
  }, 
  {
    "association": "gene-tissue associations by differential expression of gene across brain tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "brainatlasmouseinsitu", 
    "resource_url": "http://www.brain-map.org/", 
    "number_of_genes": "14248", 
    "data_description": "mRNA expression profiles for adult mouse brain tissues measured by in-situ hybridization spanning ~2000 anatomically defined brain structures", 
    "resource_description": "database of anatomic and gene expression data for the brain", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "2228", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the brain atlas api", 
    "long_description": "The Allen Brain Atlas is a database of anatomic and gene expression data for the brain.", 
    "readme_url": "http://help.brain-map.org/display/mousebrain/API;http://help.brain-map.org//display/api/Quantified+Data+by+Structures;http://help.brain-map.org/display/api/Allen+Brain+Atlas+API", 
    "publication": [
      {
        "pmid": "23193282", 
        "citation": "Sunkin, S. M., Ng, L., Lau, C., Dolbeare, T., Gilbert, T. L., Thompson, C. L., Hawrylycz, M. and C. Dang. (2013) Allen Brain Atlas: an integrated spatio-temporal portal for exploring the central nervous system. Nucleic Acids Res. 41:D996-D1008.", 
        "author": "Sunkin et al."
      }, 
      {
        "pmid": "17151600", 
        "citation": "Lein, E. S. et al. (2007) Genome-wide atlas of gene expression in the adult mouse brain. Nature. 445:168-176.", 
        "author": "Lein et al."
      }, 
      {
        "pmid": "19826436", 
        "citation": "Jones, A. R., Overly, C. C. and S. M. Sunkin. (2009) The Allen Brain Atlas: 5 years and beyond. Nat Rev Neruosci. 10:821-828.", 
        "author": "Jones et al."
      }, 
      {
        "pmid": "23041053", 
        "citation": " Shen, E. H., Overly, C. C. and A. R. Jones. (2012) The Allen Human Brain Atlas: comprehensive gene expression mapping of the human brain. Trends Neurosci. 35:711-714.", 
        "author": " Shen et al."
      }
    ], 
    "resource_name": "Allen Brain Atlas"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "brainatlashumanrnaseq", 
    "resource_url": "http://www.brainspan.org/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for human brain tissue samples measured by RNA-seq spanning 31 time points and 26 brain structures", 
    "resource_description": "database of anatomic and gene expression data for the brain", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.brainspan.org/api/v2/well_known_file_download/267666525", 
    "notes": null, 
    "long_description": "The Allen Brain Atlas is a database of anatomic and gene expression data for the brain.", 
    "readme_url": "http://www.brainspan.org/static/download.html;http://help.brain-map.org/download/attachments/3506181/Transcriptome_Profiling.pdf?version=1&modificationDate=1382036562736", 
    "publication": [
      {
        "pmid": "23193282", 
        "citation": "Sunkin, S. M., Ng, L., Lau, C., Dolbeare, T., Gilbert, T. L., Thompson, C. L., Hawrylycz, M. and C. Dang. (2013) Allen Brain Atlas: an integrated spatio-temporal portal for exploring the central nervous system. Nucleic Acids Res. 41:D996-D1008.", 
        "author": "Sunkin et al."
      }, 
      {
        "pmid": "19826436", 
        "citation": "Jones, A. R., Overly, C. C. and S. M. Sunkin. (2009) The Allen Brain Atlas: 5 years and beyond. Nat Rev Neruosci. 10:821-828.", 
        "author": "Jones et al."
      }, 
      {
        "pmid": "23041053", 
        "citation": " Shen, E. H., Overly, C. C. and A. R. Jones. (2012) The Allen Human Brain Atlas: comprehensive gene expression mapping of the human brain. Trends Neurosci. 35:711-714.", 
        "author": " Shen et al."
      }
    ], 
    "resource_name": "Allen Brain Atlas"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "brainatlashumanmicroarray", 
    "resource_url": "http://www.brainspan.org/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for human brain tissue samples measured by microarray spanning 27 time points and 26 brain structures", 
    "resource_description": "database of anatomic and gene expression data for the brain", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.brainspan.org/api/v2/well_known_file_download/267666527", 
    "notes": null, 
    "long_description": "The Allen Brain Atlas is a database of anatomic and gene expression data for the brain.", 
    "readme_url": "http://www.brainspan.org/static/download.html;http://help.brain-map.org/download/attachments/3506181/Transcriptome_Profiling.pdf?version=1&modificationDate=1382036562736", 
    "publication": [
      {
        "pmid": "23193282", 
        "citation": "Sunkin, S. M., Ng, L., Lau, C., Dolbeare, T., Gilbert, T. L., Thompson, C. L., Hawrylycz, M. and C. Dang. (2013) Allen Brain Atlas: an integrated spatio-temporal portal for exploring the central nervous system. Nucleic Acids Res. 41:D996-D1008.", 
        "author": "Sunkin et al."
      }, 
      {
        "pmid": "19826436", 
        "citation": "Jones, A. R., Overly, C. C. and S. M. Sunkin. (2009) The Allen Brain Atlas: 5 years and beyond. Nat Rev Neruosci. 10:821-828.", 
        "author": "Jones et al."
      }, 
      {
        "pmid": "23041053", 
        "citation": " Shen, E. H., Overly, C. C. and A. R. Jones. (2012) The Allen Human Brain Atlas: comprehensive gene expression mapping of the human brain. Trends Neurosci. 35:711-714.", 
        "author": " Shen et al."
      }
    ], 
    "resource_name": "Allen Brain Atlas"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "brainatlashumanprenatal", 
    "resource_url": "http://www.brainspan.org/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for 4 human prenatal brain tissue samples measured by microarray spanning 4 time points and ~300 brain structures", 
    "resource_description": "database of anatomic and gene expression data for the brain", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.brainspan.org/api/v2/well_known_file_download/278442900;http://www.brainspan.org/api/v2/well_known_file_download/278444085;http://www.brainspan.org/api/v2/well_known_file_download/278444090;http://www.brainspan.org/api/v2/well_known_file_download/278444094", 
    "notes": null, 
    "long_description": "The Allen Brain Atlas is a database of anatomic and gene expression data for the brain.", 
    "readme_url": "http://www.brainspan.org/static/download.html;http://help.brain-map.org/download/attachments/3506181/Prenatal_LMD_Microarray.pdf?version=1&modificationDate=1348698086255", 
    "publication": [
      {
        "pmid": "23193282", 
        "citation": "Sunkin, S. M., Ng, L., Lau, C., Dolbeare, T., Gilbert, T. L., Thompson, C. L., Hawrylycz, M. and C. Dang. (2013) Allen Brain Atlas: an integrated spatio-temporal portal for exploring the central nervous system. Nucleic Acids Res. 41:D996-D1008.", 
        "author": "Sunkin et al."
      }, 
      {
        "pmid": "24695229", 
        "citation": "Miller, J. A. et al. (2014) Transcriptional landscape of the prenatal human brain. Nature. 508:199-206.", 
        "author": "Miller et al."
      }, 
      {
        "pmid": "19826436", 
        "citation": "Jones, A. R., Overly, C. C. and S. M. Sunkin. (2009) The Allen Brain Atlas: 5 years and beyond. Nat Rev Neruosci. 10:821-828.", 
        "author": "Jones et al."
      }, 
      {
        "pmid": "23041053", 
        "citation": " Shen, E. H., Overly, C. C. and A. R. Jones. (2012) The Allen Human Brain Atlas: comprehensive gene expression mapping of the human brain. Trends Neurosci. 35:711-714.", 
        "author": " Shen et al."
      }
    ], 
    "resource_name": "Allen Brain Atlas"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "brainatlashumandevelopmental", 
    "resource_url": "http://human.brain-map.org/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for 6 adult human brain tissue samples measured by microarray spanning ~300 brain structures", 
    "resource_description": "database of anatomic and gene expression data for the brain", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://human.brain-map.org/api/v2/well_known_file_download/178238387;http://human.brain-map.org/api/v2/well_known_file_download/178238373;http://human.brain-map.org/api/v2/well_known_file_download/178238359;http://human.brain-map.org/api/v2/well_known_file_download/178238316;http://human.brain-map.org/api/v2/well_known_file_download/178238266;http://human.brain-map.org/api/v2/well_known_file_download/178236545", 
    "notes": null, 
    "long_description": "The Allen Brain Atlas is a database of anatomic and gene expression data for the brain.", 
    "readme_url": "http://help.brain-map.org/display/humanbrain/Documentation", 
    "publication": [
      {
        "pmid": "23193282", 
        "citation": "Sunkin, S. M., Ng, L., Lau, C., Dolbeare, T., Gilbert, T. L., Thompson, C. L., Hawrylycz, M. and C. Dang. (2013) Allen Brain Atlas: an integrated spatio-temporal portal for exploring the central nervous system. Nucleic Acids Res. 41:D996-D1008.", 
        "author": "Sunkin et al."
      }, 
      {
        "pmid": "22996553", 
        "citation": "Hawrylycz, M. J. et al. (2012) An anatomically comprehensive atlas of the adult human brain transcriptome. Nature. 489:391-399.", 
        "author": "Hawrylycz et al."
      }, 
      {
        "pmid": "19826436", 
        "citation": "Jones, A. R., Overly, C. C. and S. M. Sunkin. (2009) The Allen Brain Atlas: 5 years and beyond. Nat Rev Neruosci. 10:821-828.", 
        "author": "Jones et al."
      }, 
      {
        "pmid": "23041053", 
        "citation": " Shen, E. H., Overly, C. C. and A. R. Jones. (2012) The Allen Human Brain Atlas: comprehensive gene expression mapping of the human brain. Trends Neurosci. 35:711-714.", 
        "author": " Shen et al."
      }
    ], 
    "resource_name": "Allen Brain Atlas"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No (L)", 
    "directory": "biocarta", 
    "resource_url": "http://www.biocarta.com/genes/index.asp;http://pid.nci.nih.gov/browse_pathways.shtml#biocarta", 
    "number_of_genes": "1397", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of curated pathways", 
    "todo": "done", 
    "status": "pending", 
    "number_of_attributes": "254", 
    "data_class": "literature curation", 
    "data_url": "ftp://ftp1.nci.nih.gov/pub/PID/molList/100231.mol.tab.gz (example)", 
    "notes": "scrape html at http://pid.nci.nih.gov/browse_pathways.shtml#biocarta to get ID numbers for each pathway, then use the example Data URL template to download individual pathway files", 
    "long_description": "database of curated pathways", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": null, 
        "citation": null, 
        "author": null
      }
    ], 
    "resource_name": "Biocarta"
  }, 
  {
    "association": "gene-cell line/tissue associations by differential expression of gene across cell lines/tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line/tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "gene_set_library": "gene_set_library_fuzzy.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "biogpshuman", 
    "resource_url": "http://biogps.org/", 
    "number_of_genes": "12606", 
    "data_description": "mRNA expression profiles for human tissues and cell lines measured by microarray", 
    "resource_description": "database of gene expression profiles for human and mouse tissues, cell types and cell lines and portal for gene annotations from other databases", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "84", 
    "data_class": "functional genomics", 
    "data_url": "http://plugins.biogps.org/download/gnf1h-gcrma.zip", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://biogps.org/downloads/", 
    "publication": [
      {
        "pmid": "23175613", 
        "citation": "Wu, C., Macleod, I. and A. I. Su. (2013) BioGPS and MyGene.info: organizing online, gene-centric information. Nucleic Acids Res. 41:D561-565.", 
        "author": "Wu et al."
      }, 
      {
        "pmid": "15075390", 
        "citation": "Su, A. I., Wiltshire, T., Batalov, S., Lapp, H., Ching, K. A., Block, D., Zhang, J., Soden, R., Hayakawa, M., Kreiman, G., Cooke, M. P., Walker, J. R. and J. B. Hogenesch. (2004) A gene atlas of the mouse and human protein-encoding transcriptomes. Proc Natl Acad Sci U S A. 101:6062-6067.", 
        "author": "Su et al."
      }, 
      {
        "pmid": "11904358", 
        "citation": "Su, A. I., Cooke, M. P., Ching, K. A., Hakak, Y., Walker, J. R., Wiltshire, T., Orth, A. P., Vega, R. G., Sapinoso, L. M., Moqrich, A., Patapoutian, A., Hampton, G. M., Schultz, P. G. and J. B. Hogenesch. (2002) Large-scale analysis of the human and mouse transcriptomes. Proc Natl Acad Sci U S A. 99:4465-4470.", 
        "author": "Su et al."
      }
    ], 
    "resource_name": "BioGPS"
  }, 
  {
    "association": "gene-cell line/tissue associations by differential expression of gene across cell lines/tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line/tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "gene_set_library": "gene_set_library_fuzzy.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "biogpsmouse", 
    "resource_url": "http://biogps.org/", 
    "number_of_genes": "14506", 
    "data_description": "mRNA expression profiles for mouse tissues and cell lines measured by microarray", 
    "resource_description": "database of gene expression profiles for human and mouse tissues, cell types and cell lines and portal for gene annotations from other databases", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "96", 
    "data_class": "functional genomics", 
    "data_url": "http://plugins.biogps.org/download/GNF1M_geneatlas_20120817.zip", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://biogps.org/downloads/", 
    "publication": [
      {
        "pmid": "23175613", 
        "citation": "Wu, C., Macleod, I. and A. I. Su. (2013) BioGPS and MyGene.info: organizing online, gene-centric information. Nucleic Acids Res. 41:D561-565.", 
        "author": "Wu et al."
      }, 
      {
        "pmid": "15075390", 
        "citation": "Su, A. I., Wiltshire, T., Batalov, S., Lapp, H., Ching, K. A., Block, D., Zhang, J., Soden, R., Hayakawa, M., Kreiman, G., Cooke, M. P., Walker, J. R. and J. B. Hogenesch. (2004) A gene atlas of the mouse and human protein-encoding transcriptomes. Proc Natl Acad Sci U S A. 101:6062-6067.", 
        "author": "Su et al."
      }, 
      {
        "pmid": "11904358", 
        "citation": "Su, A. I., Cooke, M. P., Ching, K. A., Hakak, Y., Walker, J. R., Wiltshire, T., Orth, A. P., Vega, R. G., Sapinoso, L. M., Moqrich, A., Patapoutian, A., Hampton, G. M., Schultz, P. G. and J. B. Hogenesch. (2002) Large-scale analysis of the human and mouse transcriptomes. Proc Natl Acad Sci U S A. 99:4465-4470.", 
        "author": "Su et al."
      }
    ], 
    "resource_name": "BioGPS"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "biogpsnci60", 
    "resource_url": "http://biogps.org/", 
    "number_of_genes": "12071", 
    "data_description": "mRNA expression profiles for the NCI-60 panel of cancer cell lines measured by microarray", 
    "resource_description": "database of gene expression profiles for human and mouse tissues, cell types and cell lines and portal for gene annotations from other databases", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "93", 
    "data_class": "functional genomics", 
    "data_url": "http://plugins.biogps.org/download/NCI60_U133A_20070815.raw.csv.zip", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://biogps.org/downloads/", 
    "publication": [
      {
        "pmid": "23175613", 
        "citation": "Wu, C., Macleod, I. and A. I. Su. (2013) BioGPS and MyGene.info: organizing online, gene-centric information. Nucleic Acids Res. 41:D561-565.", 
        "author": "Wu et al."
      }, 
      {
        "pmid": "15075390", 
        "citation": "Su, A. I., Wiltshire, T., Batalov, S., Lapp, H., Ching, K. A., Block, D., Zhang, J., Soden, R., Hayakawa, M., Kreiman, G., Cooke, M. P., Walker, J. R. and J. B. Hogenesch. (2004) A gene atlas of the mouse and human protein-encoding transcriptomes. Proc Natl Acad Sci U S A. 101:6062-6067.", 
        "author": "Su et al."
      }, 
      {
        "pmid": "11904358", 
        "citation": "Su, A. I., Cooke, M. P., Ching, K. A., Hakak, Y., Walker, J. R., Wiltshire, T., Orth, A. P., Vega, R. G., Sapinoso, L. M., Moqrich, A., Patapoutian, A., Hampton, G. M., Schultz, P. G. and J. B. Hogenesch. (2002) Large-scale analysis of the human and mouse transcriptomes. Proc Natl Acad Sci U S A. 99:4465-4470.", 
        "author": "Su et al."
      }
    ], 
    "resource_name": "BioGPS"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "biogrid", 
    "resource_url": "http://thebiogrid.org/", 
    "number_of_genes": null, 
    "data_description": "protein-protein interactions from low-throughput or high-throughput studies", 
    "resource_description": "database of protein-protein interactions", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://thebiogrid.org/downloads/archives/Release%20Archive/BIOGRID-3.3.122/BIOGRID-ORGANISM-3.3.122.mitab.zip", 
    "notes": null, 
    "long_description": "database of protein-protein interactions", 
    "readme_url": "http://thebiogrid.org/download.php", 
    "publication": [
      {
        "pmid": "23203989", 
        "citation": "Chatr-Aryamontri, A. et al. (2013) The BioGRID interaction database: 2013 update. Nucleic Acids Research. 41:D816-823.", 
        "author": "Chatr-Aryamontri et al."
      }
    ], 
    "resource_name": "Biological General Repository of Interaction Datasets (BioGRID)"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "bind", 
    "resource_url": "http://bond.unleashedinformatics.com/", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions from low-throughput or high-throughput studies", 
    "resource_description": "database of biomolecular interactions", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://download.baderlab.org/BINDTranslation/release1_0/PSIMI25_MITAB/taxid9606_PSIMI25.tsv;http://download.baderlab.org/BINDTranslation/release1_0/BINDTranslation_v1_mitab_TopSpecies.tar.gz", 
    "notes": null, 
    "long_description": "database of biomolecular interactions", 
    "readme_url": "http://download.baderlab.org/BINDTranslation/BIND_PSIMI25_README.txt", 
    "publication": [
      {
        "pmid": "21233089", 
        "citation": "Isserlin, R., El-Badrawi, R. A. and G. D. Bader. (2011) The Biomolecular Interaction Network Database in PSI-MI 2.5. Database. 2011:baq037.", 
        "author": "Isserlin et al."
      }
    ], 
    "resource_name": "Biomolecular Interaction Network Database (BIND)"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "cclemrna", 
    "resource_url": "http://www.broadinstitute.org/ccle/home", 
    "number_of_genes": "18025", 
    "data_description": "mRNA expression profiles for cancer cell lines measured by microarray", 
    "resource_description": "database of gene expression, genotype, and drug sensitivity data for human cancer cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1037", 
    "data_class": "functional genomics", 
    "data_url": "http://www.broadinstitute.org/ccle/downloadFile/DefaultSystemRoot/exp_10/ds_21/CCLE_Expression_Entrez_2012-09-29.gct?downloadff=true&fileId=6763;http://www.broadinstitute.org/ccle/downloadFile/DefaultSystemRoot/exp_10/ds_22/CCLE_sample_info_file_2012-10-18.txt?downloadff=true&fileId=6801", 
    "notes": null, 
    "long_description": "The Cancer Cell Line Encyclopedia is a database of gene expression, genotype, and drug sensitivity data for human cancer cell lines.", 
    "readme_url": "http://www.broadinstitute.org/ccle/data/browseData?conversationPropagation=begin", 
    "publication": [
      {
        "pmid": "22460905", 
        "citation": "Barretina, J. et al. (2012) The Cancer Cell Line Encyclopedia enables predictive modelling of anticancer drug sensitivity. Nature. 483:603-607.", 
        "author": "Barretina et al."
      }
    ], 
    "resource_name": "Cancer Cell Line Encyclopedia (CCLE)"
  }, 
  {
    "association": "gene-cell line associations by copy number variation of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "cclecnv", 
    "resource_url": "http://www.broadinstitute.org/ccle/home", 
    "number_of_genes": "23264", 
    "data_description": "gene-level copy number variation profiles for cancer cell lines measured by SNP microarray", 
    "resource_description": "database of gene expression, genotype, and drug sensitivity data for human cancer cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1043", 
    "data_class": "genomics", 
    "data_url": "http://www.broadinstitute.org/ccle/downloadFile/DefaultSystemRoot/exp_10/ds_20/CCLE_copynumber_byGene_2013-12-03.txt.gz?downloadff=true&fileId=17599;http://www.broadinstitute.org/ccle/downloadFile/DefaultSystemRoot/exp_10/ds_22/CCLE_sample_info_file_2012-10-18.txt?downloadff=true&fileId=6801", 
    "notes": null, 
    "long_description": "The Cancer Cell Line Encyclopedia is a database of gene expression, genotype, and drug sensitivity data for human cancer cell lines.", 
    "readme_url": "http://www.broadinstitute.org/ccle/data/browseData?conversationPropagation=begin", 
    "publication": [
      {
        "pmid": "22460905", 
        "citation": "Barretina, J. et al. (2012) The Cancer Cell Line Encyclopedia enables predictive modelling of anticancer drug sensitivity. Nature. 483:603-607.", 
        "author": "Barretina et al."
      }
    ], 
    "resource_name": "Cancer Cell Line Encyclopedia (CCLE)"
  }, 
  {
    "association": "gene-cell line associations by mutation of gene in cell line", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "cosmicmut", 
    "resource_url": "http://cancer.sanger.ac.uk/cancergenome/projects/cosmic/", 
    "number_of_genes": "17972", 
    "data_description": "gene mutations in cancer cell lines from low-throughput or high-throughput studies", 
    "resource_description": "knowledgebase of somatic mutations in cancer", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1026", 
    "data_class": "genomics", 
    "data_url": "http://cancer.sanger.ac.uk/files/cell_lines/current_release/CosmicCLP_MutantExport.tsv.gz", 
    "notes": null, 
    "long_description": "The Catalogue of Somatic Mutations in Cancer is a database of information about somatic mutations in cancer obtained from curation of relevant literature and from high-throughput sequencing data generated by the Cancer Genome Project and other cancer profiling projects such as The Cancer Genome Atlas.  Specifically, COSMIC collects information about point mutations, gene fusions, genomic rearrangements, and copy number variation in cancer tissue samples and cancer cell lines.", 
    "readme_url": "http://cancer.sanger.ac.uk/cancergenome/projects/cell_lines/download", 
    "publication": [
      {
        "pmid": "20952405", 
        "citation": "Forbes, S. A. et al. (2011) COSMIC: mining complete cancer genomes in the Catalogue of Somatic Mutations in Cancer. Nucleic Acids Research. 39:D945-D950.", 
        "author": "Forbes et al."
      }
    ], 
    "resource_name": "Catalogue of Somatic Mutations In Cancer (COSMIC)"
  }, 
  {
    "association": "gene-cell line associations by copy number variation of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "cosmiccnv", 
    "resource_url": "http://cancer.sanger.ac.uk/cancergenome/projects/cosmic/", 
    "number_of_genes": "19757", 
    "data_description": "gene-level copy number variation profiles for cancer cell lines measured by SNP microarray", 
    "resource_description": "knowledgebase of somatic mutations in cancer", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "950", 
    "data_class": "genomics", 
    "data_url": "http://cancer.sanger.ac.uk/files/cell_lines/current_release/CosmicCLPCompleteCNA.tsv.gz", 
    "notes": null, 
    "long_description": "The Catalogue of Somatic Mutations in Cancer is a database of information about somatic mutations in cancer obtained from curation of relevant literature and from high-throughput sequencing data generated by the Cancer Genome Project and other cancer profiling projects such as The Cancer Genome Atlas.  Specifically, COSMIC collects information about point mutations, gene fusions, genomic rearrangements, and copy number variation in cancer tissue samples and cancer cell lines.", 
    "readme_url": "http://cancer.sanger.ac.uk/cancergenome/projects/cell_lines/download", 
    "publication": [
      {
        "pmid": "20952405", 
        "citation": "Forbes, S. A. et al. (2011) COSMIC: mining complete cancer genomes in the Catalogue of Somatic Mutations in Cancer. Nucleic Acids Research. 39:D945-D950.", 
        "author": "Forbes et al."
      }
    ], 
    "resource_name": "Catalogue of Somatic Mutations In Cancer (COSMIC)"
  }, 
  {
    "association": "gene-transcription factor associations by binding of transcription factor near transcription start site of gene", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "transcription factor", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "chea", 
    "resource_url": "http://amp.pharm.mssm.edu/lib/chea.jsp", 
    "number_of_genes": "18928", 
    "data_description": "target genes of transcription factors from published ChIP-chip, ChIP-seq, and other transcription factor binding site profiling studies", 
    "resource_description": "gene-set enrichment analysis tool testing for putative regulatory transcription factors of query gene-sets", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "240", 
    "data_class": "data aggregation", 
    "data_url": "http://amp.pharm.mssm.edu/result/kea/chea-background.zip", 
    "notes": null, 
    "long_description": "ChIP-X Enrichment Analysis is a gene-set enrichment analysis tool tailored to test if query gene-sets are enriched with genes that are putative targets of transcription factors.  ChEA utilizes a gene-set library with transcription factors labeling sets of putative target genes curated from published ChIP-chip, ChIP-seq, ChIP-PET, and DamID experiments.", 
    "readme_url": "http://amp.pharm.mssm.edu/lib/cheadownload.jsp", 
    "publication": [
      {
        "pmid": "20709693", 
        "citation": "Lachmann, A. et al. (2010) ChEA: transcription factor regulation inferred from integrating genome-wide ChIP-X experiments. Bioinformatics. 26:2438-2444.", 
        "author": "Lachmann et al."
      }
    ], 
    "resource_name": "ChIP-X Enrichment Analysis (CHEA)"
  }, 
  {
    "association": "gene-phenotype associations by crowd-sourced curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No", 
    "directory": "clinvar", 
    "resource_url": "http://www.ncbi.nlm.nih.gov/clinvar/", 
    "number_of_genes": null, 
    "data_description": "SNP-phenotype associations curated by ClinVar users from various sources", 
    "resource_description": "database of associations between genetic variants and clinically relevant phenotypes", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar.vcf.gz", 
    "notes": null, 
    "long_description": "ClinVar is a collection of reports of associations between genetic variants documented in dbSNP or dbVar and clinically relevant phenotypes.  Each entry reports an association, its supporting evidence, and other annotations.  Data are collected from clinical tests, research studies, and literature curation.  Only GWAS that have been reviewed and annotated with information about clinical relevance are included. Phenotypes are mapped to MedGen concepts.", 
    "readme_url": "ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/README.txt;http://www.ncbi.nlm.nih.gov/variation/docs/human_variation_vcf/#clinvar", 
    "publication": [
      {
        "pmid": "24234437", 
        "citation": "Landrum, M. J., Lee, J. M., Riley, G. R., Jang, W., Rubinstein, W. S., Church, D. M. and D. R. Maglott. (2014) ClinVar: public archive of relationships among sequence variation and human phenotype. Nucleic Acids Res. 42:D980:D985.", 
        "author": "Landrum et al."
      }
    ], 
    "resource_name": "ClinVar"
  }, 
  {
    "association": "gene-chemical associations by manual literature curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "chemical", 
    "attribute_class": "small molecule", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "Yes", 
    "directory": "ctdchemical", 
    "resource_url": "http://ctdbase.org/", 
    "number_of_genes": null, 
    "data_description": "chemical-gene interactions curated from literature", 
    "resource_description": "database of chemical-gene, chemical-disease, and gene-disease interactions manually curated from literature", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://ctdbase.org/reports/CTD_chem_gene_ixns.tsv.gz", 
    "notes": null, 
    "long_description": "database of curated chemical-gene, chemical-disease, and gene-disease interactions", 
    "readme_url": "http://ctdbase.org/downloads/;http://ctdbase.org/reports/CTD_chem_gene_ixn_types.tsv", 
    "publication": [
      {
        "pmid": "25326323", 
        "citation": "Davis, A. P., Grondin, C. J., Lennon-Hopkins, K., Saraceni-Richards, C., Sciaky, D., King, B. L., Wiegers, T. C. and C. J. Mattingly. (2015) The Comparative Toxicogenomics Database's 10th year anniversary: update 2015. Nucleic Acids Res. 43:D914-D920.", 
        "author": "Davis et al."
      }
    ], 
    "resource_name": "Comparative Toxicogenomics Database (CTD)"
  }, 
  {
    "association": "gene-disease associations by manual literature curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "disease", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "Yes", 
    "directory": "ctddisease", 
    "resource_url": "http://ctdbase.org/", 
    "number_of_genes": null, 
    "data_description": "disease-gene interactions curated from literature", 
    "resource_description": "database of chemical-gene, chemical-disease, and gene-disease interactions manually curated from literature", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://ctdbase.org/reports/CTD_genes_diseases.tsv.gz", 
    "notes": null, 
    "long_description": "database of curated chemical-gene, chemical-disease, and gene-disease interactions", 
    "readme_url": "http://ctdbase.org/downloads/", 
    "publication": [
      {
        "pmid": "25326323", 
        "citation": "Davis, A. P., Grondin, C. J., Lennon-Hopkins, K., Saraceni-Richards, C., Sciaky, D., King, B. L., Wiegers, T. C. and C. J. Mattingly. (2015) The Comparative Toxicogenomics Database's 10th year anniversary: update 2015. Nucleic Acids Res. 43:D914-D920.", 
        "author": "Davis et al."
      }
    ], 
    "resource_name": "Comparative Toxicogenomics Database (CTD)"
  }, 
  {
    "association": "gene-cellular compartment associations from automated text-mining of biomedical literature", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "cellular compartment", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensencompartmenttextmining", 
    "resource_url": "http://compartments.jensenlab.org/Search", 
    "number_of_genes": "14375", 
    "data_description": "gene-cellular compartment co-occurrence scores from text-mining biomedical abstracts", 
    "resource_description": "database of protein subcellular localization evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "2081", 
    "data_class": "text-mining", 
    "data_url": "http://download.jensenlab.org/human_compartment_textmining_full.tsv", 
    "notes": null, 
    "long_description": "COMPARTMENTS is a database of protein subcellular localization evidence, using evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining.  Subcellular structure/compartment terms were mapped to the Cellular Component subset of the Gene Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-compartment associations.", 
    "readme_url": "http://compartments.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "24573882", 
        "citation": "Binder, J. X., Pletscher-Frankild, S., Tsafou, K., Stolte, C., O'Donoghue, S. I., Schneider, R. and L. J. Jensen. (2014) COMPARTMENTS: unification and visualization of protein subcellular localization evidence. Database. 2014:bau012.", 
        "author": "Binder et al."
      }
    ], 
    "resource_name": "COMPARTMENTS"
  }, 
  {
    "association": "gene-cellular compartment associations by integrating evidence from manual literature curation", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "cellular compartment", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensencompartmentcurated", 
    "resource_url": "http://compartments.jensenlab.org/Search", 
    "number_of_genes": "16738", 
    "data_description": "protein subcellular localization evidence scores by manual literature curation", 
    "resource_description": "database of protein subcellular localization evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "1463", 
    "data_class": "literature curation", 
    "data_url": "http://download.jensenlab.org/human_compartment_knowledge_full.tsv", 
    "notes": null, 
    "long_description": "COMPARTMENTS is a database of protein subcellular localization evidence, using evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining.  Subcellular structure/compartment terms were mapped to the Cellular Component subset of the Gene Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-compartment associations.", 
    "readme_url": "http://compartments.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "24573882", 
        "citation": "Binder, J. X., Pletscher-Frankild, S., Tsafou, K., Stolte, C., O'Donoghue, S. I., Schneider, R. and L. J. Jensen. (2014) COMPARTMENTS: unification and visualization of protein subcellular localization evidence. Database. 2014:bau012.", 
        "author": "Binder et al."
      }
    ], 
    "resource_name": "COMPARTMENTS"
  }, 
  {
    "association": "gene-cellular compartment associations by integrating evidence from experimental studies", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "cellular compartment", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensencompartmentexpts", 
    "resource_url": "http://compartments.jensenlab.org/Search", 
    "number_of_genes": "6495", 
    "data_description": "protein subcellular localization evidence scores by integrating experimental data", 
    "resource_description": "database of protein subcellular localization evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "59", 
    "data_class": "data aggregation", 
    "data_url": "http://download.jensenlab.org/human_compartment_experiments_full.tsv", 
    "notes": null, 
    "long_description": "COMPARTMENTS is a database of protein subcellular localization evidence, using evidence collected by integrating experimental datasets, by integrating sequence-based predictions, by manual literature curation, or by automated textmining.  Subcellular structure/compartment terms were mapped to the Cellular Component subset of the Gene Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-compartment associations.", 
    "readme_url": "http://compartments.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "24573882", 
        "citation": "Binder, J. X., Pletscher-Frankild, S., Tsafou, K., Stolte, C., O'Donoghue, S. I., Schneider, R. and L. J. Jensen. (2014) COMPARTMENTS: unification and visualization of protein subcellular localization evidence. Database. 2014:bau012.", 
        "author": "Binder et al."
      }
    ], 
    "resource_name": "COMPARTMENTS"
  }, 
  {
    "association": "gene-chemical associations by differential expression of gene following chemical perturbation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "chemical", 
    "attribute_class": "chemical", 
    "files": {
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "cmap", 
    "resource_url": "https://www.broadinstitute.org/cmap/", 
    "number_of_genes": "11095", 
    "data_description": "mRNA expression profiles for cell lines following  chemical perturbation measured by microarray", 
    "resource_description": "database of gene expression profiles for cell lines following pharmacologic perturbation", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "6100", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": null, 
    "long_description": null, 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "17008526", 
        "citation": "Lamb, J., Crawford, E. D., Peck, D., Modell, J. W., Blat, I. C., Wrobel, M. J., Lerner, J., Brunet, J. P., Subramanian, A., Ross, K. N., Reich, M., Hieronymus, H., Wei, G., Armstrong, S. A., Haggarty, S. J., Clemons, P. A., Wei, R., Carr, S. A., Lander, E. S. and T. R. Golub. (2006) The Connectivity Map: using gene-expression signatures to connect small molecules, genes, and disease. Science. 313:1929-1935.", 
        "author": "Lamb et al."
      }
    ], 
    "resource_name": "Connectivity Map (CMAP)"
  }, 
  {
    "association": "gene-complex associations from curated complexes", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "complex", 
    "attribute_class": "functional phrase", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "associations", 
    "isok": null, 
    "directory": "corum", 
    "resource_url": "http://mips.helmholtz-muenchen.de/genre/proj/corum", 
    "number_of_genes": "2617", 
    "data_description": "proteins participating in complexes by manual literature curation", 
    "resource_description": "database of curated protein complexes", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1657", 
    "data_class": "literature curations", 
    "data_url": "http://mips.helmholtz-muenchen.de/genre/proj/corum/allComplexes.csv", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://mips.helmholtz-muenchen.de/genre/proj/corum/readme/readmedl.html", 
    "publication": [
      {
        "pmid": "19884131", 
        "citation": "Ruepp, A., Waegele, B., Lechner, M., Brauner, B., Dunger-Kaltenbach, I., Fobo, G., Frishman, G., Montrone, C. and H. W. Mewes. (2010) CORUM: the comprehensive resource of mammalian protein complexes--2009. Nucleic Acids Res. 38:D497-D501.", 
        "author": "Ruepp et al."
      }
    ], 
    "resource_name": "CORUM"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "dip", 
    "resource_url": "http://dip.doe-mbi.ucla.edu", 
    "number_of_genes": null, 
    "data_description": "protein-protein interactions from low-throughput or high-throughput studies", 
    "resource_description": "database of protein-protein interactions", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://dip.doe-mbi.ucla.edu/dip/Download.cgi?SM=7&TX=9606", 
    "notes": null, 
    "long_description": "database of protein-protein interactions", 
    "readme_url": "http://dip.doe-mbi.ucla.edu/dip/Download.cgi", 
    "publication": [
      {
        "pmid": "14681454", 
        "citation": "Salwinski, L., Miller, C. S., Smith, A. J., Pettit, F. K., Bowie, J. U. and D. Eisenberg. (2004) The Database of Interacting Proteins: 2004 update. Nucleic Acids Res. 32:D499-D451.", 
        "author": "Salwinski et al."
      }
    ], 
    "resource_name": "Database of Interacting Partners (DIP)"
  }, 
  {
    "association": "phosphatase-substrate associations from curation of literature and protein informatics databases", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "dephosphorylated protein", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": null, 
    "directory": "depod", 
    "resource_url": "http://www.koehn.embl.de/depod/", 
    "number_of_genes": "276", 
    "data_description": "phosphatase-substrate interactions manually curated from literature and databases of protein annotations or protein interactions", 
    "resource_description": "database of phosphatases, their substrates and dephosphorylation sites", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "59", 
    "data_class": "data aggregation", 
    "data_url": "http://www.koehn.embl.de/depod/download/DEPOD_201408_human_phosphatase-substrate.txt", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://www.koehn.embl.de/depod/download.php", 
    "publication": [
      {
        "pmid": "25332398", 
        "citation": "Duan, G., Li, X. and M. Kohn. (2015) The human DEPhOsphorylation database DEPOD: a 2015 update. Nucleic Acids Res. 43:D531-D535.", 
        "author": "Duan et al."
      }
    ], 
    "resource_name": "Dephosphorylation Database (DEPOD)"
  }, 
  {
    "association": "gene-disease associations from automated text-mining of biomedical literature", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "disease", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensendiseasetextmining", 
    "resource_url": "http://diseases.jensenlab.org/Search", 
    "number_of_genes": "15309", 
    "data_description": "gene-disease co-occurrence scores from text-mining biomedical abstracts", 
    "resource_description": "database of evidence for disease-gene associations collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "4628", 
    "data_class": "text-mining", 
    "data_url": "http://download.jensenlab.org/human_disease_textmining_full.tsv", 
    "notes": null, 
    "long_description": "DISEASES is a database of evidence for disease-gene associations, using evidence collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining.  Disease terms were mapped to the Disease Ontology.  Data from disparate sources were standardized by assigning confidence scores for all disease-gene associations.", 
    "readme_url": "http://diseases.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "25484339", 
        "citation": "Pletscher-Frankild, S., Palleja, A., Tsafou, K., Binder, J. X. and L. J. Jensen. (2015) DISEASES: Text mining and data integration of disease-gene associations. Methods. 74:83-89.", 
        "author": "Pletscher-Frankild et al."
      }
    ], 
    "resource_name": "DISEASES"
  }, 
  {
    "association": "gene-disease associations by integrating evidence from manual literature curation", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "disease", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensendiseasecurated", 
    "resource_url": "http://diseases.jensenlab.org/Search", 
    "number_of_genes": "2252", 
    "data_description": "disease gene evidence scores by manual literature curation", 
    "resource_description": "database of evidence for disease-gene associations collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "770", 
    "data_class": "literature curation", 
    "data_url": "http://download.jensenlab.org/human_disease_knowledge_full.tsv", 
    "notes": null, 
    "long_description": "DISEASES is a database of evidence for disease-gene associations, using evidence collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining.  Disease terms were mapped to the Disease Ontology.  Data from disparate sources were standardized by assigning confidence scores for all disease-gene associations.", 
    "readme_url": "http://diseases.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "25484339", 
        "citation": "Pletscher-Frankild, S., Palleja, A., Tsafou, K., Binder, J. X. and L. J. Jensen. (2015) DISEASES: Text mining and data integration of disease-gene associations. Methods. 74:83-89.", 
        "author": "Pletscher-Frankild et al."
      }
    ], 
    "resource_name": "DISEASES"
  }, 
  {
    "association": "gene-disease associations by integrating evidence from experimental studies", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "disease", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensendiseaseexpts", 
    "resource_url": "http://diseases.jensenlab.org/Search", 
    "number_of_genes": "4055", 
    "data_description": "disease gene evidence scores by integrating experimental data (GWAS)", 
    "resource_description": "database of evidence for disease-gene associations collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "350", 
    "data_class": "data aggregation", 
    "data_url": "http://download.jensenlab.org/human_disease_experiments_full.tsv", 
    "notes": null, 
    "long_description": "DISEASES is a database of evidence for disease-gene associations, using evidence collected by integrating experimental datasets (GWAS), by manual literature curation, or by automated textmining.  Disease terms were mapped to the Disease Ontology.  Data from disparate sources were standardized by assigning confidence scores for all disease-gene associations.", 
    "readme_url": "http://diseases.jensenlab.org/About", 
    "publication": [
      {
        "pmid": "25484339", 
        "citation": "Pletscher-Frankild, S., Palleja, A., Tsafou, K., Binder, J. X. and L. J. Jensen. (2015) DISEASES: Text mining and data integration of disease-gene associations. Methods. 74:83-89.", 
        "author": "Pletscher-Frankild et al."
      }
    ], 
    "resource_name": "DISEASES"
  }, 
  {
    "association": "gene-drug associations by manual literature curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "drug", 
    "attribute_class": "small molecule", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "No", 
    "directory": "drugbank", 
    "resource_url": "http://www.drugbank.ca/", 
    "number_of_genes": null, 
    "data_description": "targets of drugs by manual literature curation", 
    "resource_description": "knowledgebase for drugs and their targets", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://www.drugbank.ca/system/downloads/current/all_target_ids_all.csv.zip;http://www.drugbank.ca/system/downloads/current/all_enzyme_ids_all.csv.zip;http://www.drugbank.ca/system/downloads/current/all_carrier_ids_all.csv.zip;http://www.drugbank.ca/system/downloads/current/all_transporter_ids_all.csv.zip", 
    "notes": null, 
    "long_description": "knowledgebase for drugs and their targets", 
    "readme_url": "http://www.drugbank.ca/downloads#protein-identifiers", 
    "publication": [
      {
        "pmid": "21059682", 
        "citation": "Knox, C., Law, V., Jewison, T., Liu, P., Ly, S., Frolkis, A., Pon, A., Banco, K., Mak, C., Neveu, V., Djoumbou, Y., Eisner, R., Guo, A. C. and D. S. Wishart. (2011) DrugBank 3.0: a comprehensive resource for 'omics' research on drugs. Nucleic Acids Research. 39:D1035-1041.", 
        "author": "Knox et al."
      }
    ], 
    "resource_name": "DrugBank"
  }, 
  {
    "association": "gene-cell line sample associations by differential binding of transcription factor to gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line sample (sample defined by cell line and transcription factor)", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "encodetfbycellline", 
    "resource_url": "https://www.encodeproject.org/", 
    "number_of_genes": "22308", 
    "data_description": "transcription factor binding site profiles for cell lines measured by ChIP-seq", 
    "resource_description": "project mapping genes and their regulatory elements on the human genome", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1259", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the encode api", 
    "long_description": "The Encyclopedia of DNA Elements is a genome mapping project that seeks to annotate the human genome with information about genes and elements that regulate gene transcription, such as transcription factor binding sites.  So far, the ENCODE project has completed over 1000 assays for mapping transcription factor binding sites using ChIP-Seq.  Chromatin immuno-precipitation followed by sequencing (ChIP-Seq) is a method for identifying transcription factor binding sites that involves isolation and sequencing of short strands of DNA to which an immuno-precipitated transcription factor was bound.  Subsequently, target genes of transcription factors can be inferred based on the proximity of transcription factor binding sites to transcription start sites of genes.", 
    "readme_url": "https://www.encodeproject.org/help/getting-started/", 
    "publication": [
      {
        "pmid": "15499007", 
        "citation": "ENCODE Consortium. (2004) The ENCODE (ENCyclopedia Of DNA Elements) Project. Science. 306:636-640.", 
        "author": "ENCODE Consortium. et al."
      }, 
      {
        "pmid": "21526222", 
        "citation": "ENCODE Consortium. (2011) A User's Guide to the Encyclopedia of DNA Elements (ENCODE). PLoS Biology. 9:e1001046.", 
        "author": "ENCODE Consortium. et al."
      }
    ], 
    "resource_name": "Encyclopedia of DNA Elements (ENCODE)"
  }, 
  {
    "association": "gene-cell line sample associations by differential modification of histones near gene across cell line samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line sample (sample defined by cell line and histone modification)", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "encodehmbycellline", 
    "resource_url": "https://www.encodeproject.org/", 
    "number_of_genes": "22219", 
    "data_description": "histone modification profiles for cell lines measured by ChIP-seq", 
    "resource_description": "project mapping genes and their regulatory elements on the human genome", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "290", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the encode api", 
    "long_description": "The Encyclopedia of DNA Elements is a genome mapping project that seeks to annotate the human genome with information about genes and elements that regulate gene transcription, such as transcription factor binding sites.  So far, the ENCODE project has completed over 1000 assays for mapping transcription factor binding sites using ChIP-Seq.  Chromatin immuno-precipitation followed by sequencing (ChIP-Seq) is a method for identifying transcription factor binding sites that involves isolation and sequencing of short strands of DNA to which an immuno-precipitated transcription factor was bound.  Subsequently, target genes of transcription factors can be inferred based on the proximity of transcription factor binding sites to transcription start sites of genes.", 
    "readme_url": "https://www.encodeproject.org/help/getting-started/", 
    "publication": [
      {
        "pmid": "15499007", 
        "citation": "ENCODE Consortium. (2004) The ENCODE (ENCyclopedia Of DNA Elements) Project. Science. 306:636-640.", 
        "author": "ENCODE Consortium. et al."
      }, 
      {
        "pmid": "21526222", 
        "citation": "ENCODE Consortium. (2011) A User's Guide to the Encyclopedia of DNA Elements (ENCODE). PLoS Biology. 9:e1001046.", 
        "author": "ENCODE Consortium. et al."
      }
    ], 
    "resource_name": "Encyclopedia of DNA Elements (ENCODE)"
  }, 
  {
    "association": "gene-gene associations from studies profiling targets of transcription factors, differentially expressed genes after gene perturbation, protein-protein interactions, or targets of microRNAs", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "genomics;proteomics;epigenomics", 
    "isok": null, 
    "directory": "escape", 
    "resource_url": "http://www.maayanlab.net/ESCAPE/", 
    "number_of_genes": "16685", 
    "data_description": "sets of target genes of transcription factors from published ChIP-chip, ChIP-seq, and other transcription factor binding site profiling studies;sets of differentially expressed genes following perturbation of a protein from gene expression data in GEO; sets of interacting proteins from high- and low-throughput protein-protein interaction studies; sets of targets of microRNAs from public databases, computationally predicted or experimentally verified", 
    "resource_description": "database of functional genomic data for mammalian embryonic stem cells", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "315", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": null, 
    "long_description": null, 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "23794736", 
        "citation": "Xu, H., Baroukh, C., Dannenfelser, R., Chen, E. Y., Tan, C. M., Kou, Y., Kim, Y. E., Lemischka, I. R. and A. Ma'ayan (2013) ESCAPE: database for integrating high-content published data collected from human and mouse embryonic stem cells. Database. 2013:bat045.", 
        "author": "Xu et al."
      }
    ], 
    "resource_name": "ESCAPE"
  }, 
  {
    "association": "gene-gene associations by differential expression of gene A following perturbation of gene B", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "geogene", 
    "resource_url": "http://www.ncbi.nlm.nih.gov/geo/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for cell lines or tissues following genetic perturbation (knockdown, knockout, over-expression, mutation) measured by microarray", 
    "resource_description": "database of functional genomic data obtained by microarray or next generation sequencing from published studies", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the geo api.  First, accession numbers for datasets and for control and experimental group samples must be obtained by manually searching the geo database.  Then data can be downloaded using the api.", 
    "long_description": "The Gene Expression Omnibus is a database of functional genomic data obtained by microarray or next generation sequencing.  GEO can be mined for studies that measured gene expression profiles of cells or tissues in control and experimental conditions, where the experimental condition may be a disease, pharmacologic perturbation or genetic perturbation (over-expression, mutation, knockdown or knockout).  A signature of differentially expressed (DE) genes can be obtained from each set of control and experimental gene expression profiles by applying a statistical method such as the Characteristic Direction.  The signature of DE genes usually takes the form of a list of genes ordered by the direction (up-regulated or down-regulated) and significance of the gene expression change.  A number that indicates the relative significance of differential expression can be included with each gene.", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "23193258", 
        "citation": "Barrett, T. et al. (2013) NCBI GEO: archive for functional genomics data sets--update. Nucleic Acids Research. 41:D991-995.", 
        "author": "Barrett et al."
      }
    ], 
    "resource_name": "Gene Expression Omnibus (GEO)"
  }, 
  {
    "association": "gene-chemical associations by differential expression of gene following chemical perturbation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "chemical", 
    "attribute_class": "small molecule", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "geochemical", 
    "resource_url": "http://www.ncbi.nlm.nih.gov/geo/", 
    "number_of_genes": "21633", 
    "data_description": "mRNA expression profiles for cell lines or tissues following chemical perturbation measured by microarray", 
    "resource_description": "database of functional genomic data obtained by microarray or next generation sequencing from published studies", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "694", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the geo api.  First, accession numbers for datasets and for control and experimental group samples must be obtained by manually searching the geo database.  Then data can be downloaded using the api.", 
    "long_description": "The Gene Expression Omnibus is a database of functional genomic data obtained by microarray or next generation sequencing.  GEO can be mined for studies that measured gene expression profiles of cells or tissues in control and experimental conditions, where the experimental condition may be a disease, pharmacologic perturbation or genetic perturbation (over-expression, mutation, knockdown or knockout).", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "23193258", 
        "citation": "Barrett, T. et al. (2013) NCBI GEO: archive for functional genomics data sets--update. Nucleic Acids Research. 41:D991-995.", 
        "author": "Barrett et al."
      }
    ], 
    "resource_name": "Gene Expression Omnibus (GEO)"
  }, 
  {
    "association": "gene-disease associations by differential expression of gene following disease perturbation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "disease", 
    "attribute_class": "phenotype", 
    "files": {
      "up_gene_set_library": "gene_set_library_up_fuzzy.gmt.gz", 
      "down_gene_set_library": "gene_set_library_dn_fuzzy.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "geodisease", 
    "resource_url": "http://www.ncbi.nlm.nih.gov/geo/", 
    "number_of_genes": "15405", 
    "data_description": "mRNA expression profiles for cell lines or tissues following disease perturbation measured by microarray", 
    "resource_description": "database of functional genomic data obtained by microarray or next generation sequencing from published studies", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "142", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the geo api.  Accession numbers for datasets and for control and experimental group samples were provided by the Dudley Lab.", 
    "long_description": "Nosology is a collection of signatures of differentially expressed genes for diseases extracted from the Gene Expression Omnibus.  The Gene Expression Omnibus is a database of functional genomic data obtained by microarray or next generation sequencing.  GEO can be mined for studies that measured gene expression profiles of cells or tissues in control and experimental conditions, where the experimental condition may be a disease, pharmacologic perturbation or genetic perturbation (over-expression, mutation, knockdown or knockout).", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "23193258", 
        "citation": "Barrett, T. et al. (2013) NCBI GEO: archive for functional genomics data sets--update. Nucleic Acids Research. 41:D991-995.", 
        "author": "Barrett et al."
      }, 
      {
        "pmid": "19756046", 
        "citation": " Dudley, J. T., Tibshirani, R., Deshpande, T. and A. J. Butte. (2009) Disease signatures are robust across tissues and experiments. Mol Syst Biol. 5:307.", 
        "author": " Dudley et al."
      }
    ], 
    "resource_name": "Gene Expression Omnibus (GEO)"
  }, 
  {
    "association": "gene-disease associations by differential expression of gene following virus perturbation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "virus", 
    "attribute_class": "pathogen", 
    "files": {
      "up_gene_set_library": "gene_set_library_up_fuzzy.gmt.gz", 
      "down_gene_set_library": "gene_set_library_dn_fuzzy.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "geovirus", 
    "resource_url": "http://www.ncbi.nlm.nih.gov/geo/", 
    "number_of_genes": "17710", 
    "data_description": "mRNA expression profiles for cell lines or tissues following virus perturbation measured by microarray", 
    "resource_description": "database of functional genomic data obtained by microarray or next generation sequencing from published studies", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "323", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the geo api.  Accession numbers for datasets and for control and experimental group samples were provided by the Dudley Lab.", 
    "long_description": "The Gene Expression Omnibus is a database of functional genomic data obtained by microarray or next generation sequencing.  GEO can be mined for studies that measured gene expression profiles of cells or tissues in control and experimental conditions, where the experimental condition may be a disease, pharmacologic perturbation or genetic perturbation (over-expression, mutation, knockdown or knockout).  A signature of differentially expressed (DE) genes can be obtained from each set of control and experimental gene expression profiles by applying a statistical method such as the Characteristic Direction.  The signature of DE genes usually takes the form of a list of genes ordered by the direction (up-regulated or down-regulated) and significance of the gene expression change.  A number that indicates the relative significance of differential expression can be included with each gene.", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "23193258", 
        "citation": "Barrett, T. et al. (2013) NCBI GEO: archive for functional genomics data sets--update. Nucleic Acids Research. 41:D991-995.", 
        "author": "Barrett et al."
      }
    ], 
    "resource_name": "Gene Expression Omnibus (GEO)"
  }, 
  {
    "association": "gene-biological process (BP) associations from curated gene annotations", 
    "download_date": {
      "day": "31", 
      "month": "03", 
      "year": "2015"
    }, 
    "attribute": "biological process (BP)", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "gobp", 
    "resource_url": "http://geneontology.org/", 
    "number_of_genes": "15717", 
    "data_description": "curated annotations of genes with biological processes (BP)", 
    "resource_description": "database of genes annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary", 
    "todo": "include script for getting ontology structure, processing script is done", 
    "status": "ready", 
    "number_of_attributes": "13212", 
    "data_class": "literature curation", 
    "data_url": "http://geneontology.org/gene-associations/gene_association.goa_ref_human.gz;http://purl.obolibrary.org/obo/go/go-basic.obo", 
    "notes": null, 
    "long_description": "The Gene Ontology is a gene annotation project.  Genes are annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary.", 
    "readme_url": "http://geneontology.org/gene-associations/readme/goa_ref_human.README", 
    "publication": [
      {
        "pmid": "23161678", 
        "citation": "Gene Ontology Consortium. (2013) Gene Ontology annotations and resources. Nucleic Acids Research. 41:D530-535.", 
        "author": "Gene Ontology Consortium. et al."
      }
    ], 
    "resource_name": "Gene Ontology (GO)"
  }, 
  {
    "association": "gene-molecular function (MF) associations from curated gene annotations", 
    "download_date": {
      "day": "31", 
      "month": "03", 
      "year": "2015"
    }, 
    "attribute": "molecular function (MF)", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "gomf", 
    "resource_url": "http://geneontology.org/", 
    "number_of_genes": "15777", 
    "data_description": "curated annotations of genes with molecular functions (MF)", 
    "resource_description": "database of genes annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary", 
    "todo": "include script for getting ontology structure, processing script is done", 
    "status": "ready", 
    "number_of_attributes": "4162", 
    "data_class": "literature curation", 
    "data_url": "http://geneontology.org/gene-associations/gene_association.goa_ref_human.gz;http://purl.obolibrary.org/obo/go/go-basic.obo", 
    "notes": null, 
    "long_description": "The Gene Ontology is a gene annotation project.  Genes are annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary.", 
    "readme_url": "http://geneontology.org/gene-associations/readme/goa_ref_human.README", 
    "publication": [
      {
        "pmid": "23161678", 
        "citation": "Gene Ontology Consortium. (2013) Gene Ontology annotations and resources. Nucleic Acids Research. 41:D530-535.", 
        "author": "Gene Ontology Consortium. et al."
      }
    ], 
    "resource_name": "Gene Ontology (GO)"
  }, 
  {
    "association": "gene-cellular component (CC) associations from curated gene annotations", 
    "download_date": {
      "day": "31", 
      "month": "03", 
      "year": "2015"
    }, 
    "attribute": "cellular component (CC)", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "gocc", 
    "resource_url": "http://geneontology.org/", 
    "number_of_genes": "16757", 
    "data_description": "curated annotations of genes with cellular components (CC)", 
    "resource_description": "database of genes annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary", 
    "todo": "include script for getting ontology structure, processing script is done", 
    "status": "ready", 
    "number_of_attributes": "1547", 
    "data_class": "literature curation", 
    "data_url": "http://geneontology.org/gene-associations/gene_association.goa_ref_human.gz;http://purl.obolibrary.org/obo/go/go-basic.obo", 
    "notes": null, 
    "long_description": "The Gene Ontology is a gene annotation project.  Genes are annotated with biological terms (molecular functions, cellular components, or biological processes) selected from a structured vocabulary.", 
    "readme_url": "http://geneontology.org/gene-associations/readme/goa_ref_human.README", 
    "publication": [
      {
        "pmid": "23161678", 
        "citation": "Gene Ontology Consortium. (2013) Gene Ontology annotations and resources. Nucleic Acids Research. 41:D530-535.", 
        "author": "Gene Ontology Consortium. et al."
      }
    ], 
    "resource_name": "Gene Ontology (GO)"
  }, 
  {
    "association": "gene-biological term associations from literature-supported statements describing functions of genes", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "biological term", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "text-mining", 
    "isok": "Yes", 
    "directory": "generif", 
    "resource_url": "ftp://ftp.ncbi.nih.gov/gene/GeneRIF/", 
    "number_of_genes": null, 
    "data_description": "statements describing functions of genes distilled from biomedical publications", 
    "resource_description": "database of genes annotated with short statements describing gene functions asserted by publications", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "ftp://ftp.ncbi.nih.gov/gene/GeneRIF/generifs_basic.gz", 
    "notes": null, 
    "long_description": "Gene Reference Into Function is a gene annotation project of the National Library of Medicine, available through the Entrez Gene website of the National Center for Biotechnology Information.  A GeneRIF is a short (425 characters or style) statement describing a function of a gene.  Each GeneRIF is tagged with the Entrez Gene ID of the described gene and the PubMed ID of the reference supporting the asserted function.",
    "readme_url": "ftp://ftp.ncbi.nih.gov/gene/README", 
    "publication": [
      {
        "pmid": "14728215", 
        "citation": "Mitchell, J. A. et al. (2003) Gene indexing: characterization and analysis of NLM's GeneRIFs. AMIA Annu Symp Proc. 2003:460-464.", 
        "author": "Mitchell et al."
      }
    ], 
    "resource_name": "Gene Reference Into Function (GeneRIF)"
  }, 
  {
    "association": "gene-PMID associations by PMID of publication reporting gene signature", 
    "download_date": {
      "day": "02", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "PMID", 
    "attribute_class": "publication", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "genesigdb", 
    "resource_url": "http://www.genesigdb.org", 
    "number_of_genes": "19750", 
    "data_description": "gene signatures reported in the literature that were derived from analysis of transcriptomic or proteomic data", 
    "resource_description": "database of gene signatures reported in the literature", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "2135", 
    "data_class": "functional genomics", 
    "data_url": "http://compbio.dfci.harvard.edu/genesigdb/download/ALL_SIGSv4.gmt", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://compbio.dfci.harvard.edu/genesigdb/downloadall.jsp", 
    "publication": [
      {
        "pmid": "22110038", 
        "citation": "Culhane, A. C., Schroder, M. S., Sultana, R., Picard, S. C., Martinelli, E. N., Kelly, C., Haibe-Kains, B., Kapushesky, M., St Pierre, A. A., Flahive, W., Picard, K. C., Gusenleitner, D., Papenhausen, G., O'Connor, N., Correll, M. and J. Quackenbush (2012) GeneSigDB: a manually curated database and resource for analysis of gene expression signatures. Nucleic Acids Res. 40:D1060-D1066.", 
        "author": "Culhane et al."
      }
    ], 
    "resource_name": "GeneSigDB"
  }, 
  {
    "association": "gene-phenotype associations curated from genetic association studies", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No", 
    "directory": "gad", 
    "resource_url": "http://geneticassociationdb.nih.gov/", 
    "number_of_genes": null, 
    "data_description": "positive and negative gene-phenotype associations curated from genetic association studies", 
    "resource_description": "database of genetic association data and metadata from published studies reorganized into a standard format", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://geneticassociationdb.nih.gov/data.zip", 
    "notes": "must separate negative associations from positive associations", 
    "long_description": "The Genetic Association Database is a collection of data from published genetic association studies, where data and metadata reported in individual studies have been reorganized into a standard format.", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "15118671", 
        "citation": "Becker, K. G., Barnes, K. C., Bright, T. J. and S. A. Wang. (2004) The genetic association database. Nat Genet. 36:431-432.", 
        "author": "Becker et al."
      }
    ], 
    "resource_name": "Genetic Association Database (GAD)"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "gdsc", 
    "resource_url": "http://www.cancerrxgene.org/", 
    "number_of_genes": "11704", 
    "data_description": "mRNA expression profiles for cancer cell lines measured by microarray", 
    "resource_description": "database of gene expression, genotype, and drug sensitivity data for human cancer cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "624", 
    "data_class": "functional genomics", 
    "data_url": "ftp://ftp.sanger.ac.uk/pub/project/cancerrxgene/releases/release-5.0/expU133A.txt.zip;ftp://ftp.sanger.ac.uk/pub/project/cancerrxgene/releases/release-5.0/gdsc_cell_lines_w5.csv", 
    "notes": null, 
    "long_description": "Genomics of Drug Sensitivity in Cancer is a database of gene expression, genotype, and drug sensitivity data for human cancer cell lines.", 
    "readme_url": "http://www.cancerrxgene.org/downloads/", 
    "publication": [
      {
        "pmid": "22460902", 
        "citation": "Garnett, M. J. et al. (2012) Systematic identification of genomic markers of drug sensitivity in cancer cells. Nature. 483:570-575.", 
        "author": "Garnett et al."
      }
    ], 
    "resource_name": "Genomics of Drug Sensitivity in Cancer (GDSC)"
  }, 
  {
    "association": "gene-SNP associations by likelihood that SNP regulates gene", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "SNP", 
    "attribute_class": "genomic feature", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "Yes", 
    "directory": "gtexeqtl", 
    "resource_url": "http://www.gtexportal.org/home/", 
    "number_of_genes": "7898", 
    "data_description": "significance values for all gene-SNP pairs testing likelihood that SNP affects gene expression", 
    "resource_description": "project mapping expression quantitative train loci on the human genome", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "7815", 
    "data_class": "functional genomics", 
    "data_url": "javascript:portalClient.browseDatasets.downloadFile('Multi_tissue_eQTL_GTEx_Pilot_Phase_datasets.tar','http://www.gtexportal.org/static/datasets/gtex_analysis_pilot_data_2013_01_31/multi_tissue_eqtls/Multi_tissue_eQTL_GTEx_Pilot_Phase_datasets.tar');javascript:portalClient.browseDatasets.downloadFile('GTEx_genot_imputed_variants_info4_maf05_CR95_CHR_POSb37_ID_REF_ALT.txt.zip','http://www.gtexportal.org/static/datasets/gtex_analysis_2014_01_17/reference/GTEx_genot_imputed_variants_info4_maf05_CR95_CHR_POSb37_ID_REF_ALT.txt.zip')", 
    "notes": null, 
    "long_description": "The Genotype-Tissue Expression project is a genome mapping project that seeks to discover expression quantitative trait loci in the human genome.  Expression quantitative trait loci (eQTL) are regions of the genome where DNA sequence variation is correlated with variation of expression of a gene or set of genes.  The GTEx Project discovers eQTL by profiling SNPs and gene expression in many human tissue samples and testing for statistically significant associations between SNPs and differentially expressed genes.", 
    "readme_url": "javascript:portalClient.browseDatasets.downloadFile('README','http://www.gtexportal.org/static/datasets/gtex_analysis_pilot_data_2013_01_31/multi_tissue_eqtls/README')", 
    "publication": [
      {
        "pmid": "23715323", 
        "citation": "GTEx Consortium. (2013) The Genotype-Tissue Expression (GTEx) project. Nature Genetics. 45:580-585.", 
        "author": "GTEx Consortium. et al."
      }
    ], 
    "resource_name": "Genotype Tissue Expression (GTEx)"
  }, 
  {
    "association": "gene-tissue associations by differential expression of gene across tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "gtextissue", 
    "resource_url": "http://www.gtexportal.org/home/", 
    "number_of_genes": "25564", 
    "data_description": "mRNA expression profiles for tissues measured by RNA-seq", 
    "resource_description": "project mapping expression quantitative train loci on the human genome", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "29", 
    "data_class": "functional genomics", 
    "data_url": "javascript:portalClient.browseDatasets.downloadFile('GTEx_Analysis_2014-01-17_RNA-seq_RNA-SeQCv1.1.8_gene_rpkm.gct.gz','http://www.gtexportal.org/static/datasets/gtex_analysis_2014_01_17/rna_seq_data/GTEx_Analysis_2014-01-17_RNA-seq_RNA-SeQCv1.1.8_gene_rpkm.gct.gz');javascript:portalClient.browseDatasets.downloadFile('GTEx_Data_2014-01-17_Annotations_SampleAttributesDS.txt','http://www.gtexportal.org/static/datasets/gtex_analysis_2014_01_17/annotations/GTEx_Data_2014-01-17_Annotations_SampleAttributesDS.txt')", 
    "notes": null, 
    "long_description": "The Genotype-Tissue Expression project is a genome mapping project that seeks to discover expression quantitative trait loci in the human genome.  Expression quantitative trait loci (eQTL) are regions of the genome where DNA sequence variation is correlated with variation of expression of a gene or set of genes.  The GTEx Project discovers eQTL by profiling SNPs and gene expression in many human tissue samples and testing for statistically significant associations between SNPs and differentially expressed genes.", 
    "readme_url": "http://www.gtexportal.org/home/datasets2", 
    "publication": [
      {
        "pmid": "23715323", 
        "citation": "GTEx Consortium. (2013) The Genotype-Tissue Expression (GTEx) project. Nature Genetics. 45:580-585.", 
        "author": "GTEx Consortium. et al."
      }
    ], 
    "resource_name": "Genotype Tissue Expression (GTEx)"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "gtexsample", 
    "resource_url": "http://www.gtexportal.org/home/", 
    "number_of_genes": "19250", 
    "data_description": "mRNA expression profiles for tissue samples measured by RNA-seq", 
    "resource_description": "project mapping expression quantitative train loci on the human genome", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "2918", 
    "data_class": "functional genomics", 
    "data_url": "javascript:portalClient.browseDatasets.downloadFile('GTEx_Analysis_2014-01-17_RNA-seq_RNA-SeQCv1.1.8_gene_rpkm.gct.gz','http://www.gtexportal.org/static/datasets/gtex_analysis_2014_01_17/rna_seq_data/GTEx_Analysis_2014-01-17_RNA-seq_RNA-SeQCv1.1.8_gene_rpkm.gct.gz');javascript:portalClient.browseDatasets.downloadFile('GTEx_Data_2014-01-17_Annotations_SampleAttributesDS.txt','http://www.gtexportal.org/static/datasets/gtex_analysis_2014_01_17/annotations/GTEx_Data_2014-01-17_Annotations_SampleAttributesDS.txt')", 
    "notes": null, 
    "long_description": "The Genotype-Tissue Expression project is a genome mapping project that seeks to discover expression quantitative trait loci in the human genome.  Expression quantitative trait loci (eQTL) are regions of the genome where DNA sequence variation is correlated with variation of expression of a gene or set of genes.  The GTEx Project discovers eQTL by profiling SNPs and gene expression in many human tissue samples and testing for statistically significant associations between SNPs and differentially expressed genes.", 
    "readme_url": "http://www.gtexportal.org/home/datasets2", 
    "publication": [
      {
        "pmid": "23715323", 
        "citation": "GTEx Consortium. (2013) The Genotype-Tissue Expression (GTEx) project. Nature Genetics. 45:580-585.", 
        "author": "GTEx Consortium. et al."
      }
    ], 
    "resource_name": "Genotype Tissue Expression (GTEx)"
  }, 
  {
    "association": "gene-clinical term associations by co-occurrence frequency in electronic health records", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "clinical term", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "text-mining", 
    "isok": "No", 
    "directory": "graphofmedicine", 
    "resource_url": "http://datadryad.org/resource/doi:10.5061/dryad.jp917", 
    "number_of_genes": null, 
    "data_description": "co-occurrence frequencies for pairs of medical terms in electronic health records", 
    "resource_description": "dataset of co-occurrence frequencies for 1 million medical terms (drugs, diseases, operations, proteins, etc.) extracted from 20 million clinical notes", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "text-mining", 
    "data_url": "http://datadryad.org/bitstream/handle/10255/dryad.68981/1_Cofrequency_Counts.tar.gz?sequence=1", 
    "notes": null, 
    "long_description": "The Graph of Medicine is a dataset of co-occurrence frequences for 1 million medical terms (drugs, diseases, operations, etc.) extracted from 20 million clinical notes written at Stanford Hospitals and Clinics over 19 years. ", 
    "readme_url": "http://datadryad.org/bitstream/handle/10255/dryad.68981/README.txt?sequence=2", 
    "publication": [
      {
        "pmid": null, 
        "citation": "Finlayson, S. G., LePendu, P. and N. H. Shah. (2014) Building the graph of medicine from millions of clinical narratives. Scientific Data. 1:140032.", 
        "author": "Finlayson et al."
      }
    ], 
    "resource_name": "Graph of Medicine"
  }, 
  {
    "association": "receptor-ligand (chemical) associations by expert curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "ligand (chemical)", 
    "attribute_class": "small molecule", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "No", 
    "directory": "guidetopharmchemical", 
    "resource_url": "http://www.guidetopharmacology.org/", 
    "number_of_genes": null, 
    "data_description": "ligand-receptor interactions curated by experts", 
    "resource_description": "knowledgebase for drug targets and their ligands", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://www.guidetopharmacology.org/DATA/interactions.csv", 
    "notes": "file includes small molecule ligands, need to filter for proteins", 
    "long_description": "knowledgebase of drug targets and their ligands (endogenous, exogenous and synthetic) with expert curated annotations", 
    "readme_url": "http://www.guidetopharmacology.org/DATA/file_descriptions.txt", 
    "publication": [
      {
        "pmid": "24234439", 
        "citation": "Pawson, A. J., Sharman, J. L., Benson, H. E., Faccenda, E., Alexander, S. P., Buneman, O. P., Davenport, A. P., McGrath, J. C., Peters, J. A., Southan, C., Spedding, M., Yu, W., Harmar, A. J., and NC-IUPHAR. (2014) The IUPHAR/BPS Guide to PHARMACOLOGY: an expert-driven knowledgebase of drug targets and their ligands. Nucleic Acids Res. 42:1098-1106.", 
        "author": "Pawson et al."
      }
    ], 
    "resource_name": "Guide to Pharmacology"
  }, 
  {
    "association": "receptor-ligand (protein) associations by expert curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "ligand (protein)", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "No", 
    "directory": "guidetopharmprotein", 
    "resource_url": "http://www.guidetopharmacology.org/", 
    "number_of_genes": null, 
    "data_description": "ligand-receptor interactions curated by experts", 
    "resource_description": "knowledgebase for drug targets and their ligands", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://www.guidetopharmacology.org/DATA/interactions.csv", 
    "notes": "file includes small molecule ligands, need to filter for proteins", 
    "long_description": "knowledgebase of drug targets and their ligands (endogenous, exogenous and synthetic) with expert curated annotations", 
    "readme_url": "http://www.guidetopharmacology.org/DATA/file_descriptions.txt", 
    "publication": [
      {
        "pmid": "24234439", 
        "citation": "Pawson, A. J., Sharman, J. L., Benson, H. E., Faccenda, E., Alexander, S. P., Buneman, O. P., Davenport, A. P., McGrath, J. C., Peters, J. A., Southan, C., Spedding, M., Yu, W., Harmar, A. J., and NC-IUPHAR. (2014) The IUPHAR/BPS Guide to PHARMACOLOGY: an expert-driven knowledgebase of drug targets and their ligands. Nucleic Acids Res. 42:1098-1106.", 
        "author": "Pawson et al."
      }
    ], 
    "resource_name": "Guide to Pharmacology"
  }, 
  {
    "association": "gene-phenotype associations by manual GWAS curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No ", 
    "directory": "gwascatalog", 
    "resource_url": "http://www.ebi.ac.uk/gwas/home", 
    "number_of_genes": "4356", 
    "data_description": "SNP-phenotype association p-values curated from published GWAS", 
    "resource_description": "database of significant SNP-phenotype associations manually curated from published GWA Studies", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1007", 
    "data_class": "functional genomics", 
    "data_url": "http://www.ebi.ac.uk/gwas/api/search/downloads/full", 
    "notes": null, 
    "long_description": "The GWAS Catalog is a collection of significant SNP-phenotype associations manually curated from published GWA Studies.", 
    "readme_url": "http://www.ebi.ac.uk/gwas/docs/fileheaders", 
    "publication": [
      {
        "pmid": "24316577", 
        "citation": "Welter, D., MacArthur, J., Morales, J., Burdett, T., Hall, P., Junkins, H., Klemm, A., Flicek, P., Manolio, T., Hindorff, L. and H. Parkinson. (2014) The NHGRI GWAS Catalog, a curated resource of SNP-trait associations. Nucleic Acids Res. 42:D1001-D1006.", 
        "author": "Welter et al."
      }
    ], 
    "resource_name": "GWAS Catalog"
  }, 
  {
    "association": "gene-phenotype associations by manual GWAS curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No", 
    "directory": "gwasdb", 
    "resource_url": "http://jjwanglab.org/gwasdb", 
    "number_of_genes": null, 
    "data_description": "SNP-phenotype association p-values curated from published GWAS", 
    "resource_description": "database of SNP-phenotype associations manually curated from published GWA Studies", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "ftp://jjwanglab.org/GWASdb/gwasdb_20140908_snp_trait.gz;ftp://jjwanglab.org/GWASdb/gwasdb_20140908_annotation.gz", 
    "notes": null, 
    "long_description": "GWASdb is a database of SNP-phenotype associations manually curated from published GWA Studies with phenotypes mapped to the Disease Ontology and Human Phenotype Ontology.", 
    "readme_url": "http://jjwanglab.org/gwasdb/gwasdb2/gwasdb2/download", 
    "publication": [
      {
        "pmid": "22139925", 
        "citation": "Li, M. J., Wang, P., Liu, X., Lim, E. L., Wang, Z., Yeager, M., Wong, M. P., Sham, P. C., Chanock, S. J. and J. Wang. (2012) GWASdb: a database for human genetic variants identified by genome-wide association studies. Nucleic Acids Res. 40:D1047-D1054.", 
        "author": "Li et al."
      }
    ], 
    "resource_name": "GWASdb"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "heiser", 
    "resource_url": "http://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-181/", 
    "number_of_genes": "15144", 
    "data_description": "mRNA expression profiles for breast cancer cell lines measured by microarray", 
    "resource_description": "Heiser et al. have collected gene expression, genotype, and drug sensitivity data for 49 breast cancer cell lines.", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "56", 
    "data_class": "functional genomics", 
    "data_url": "http://www.ebi.ac.uk/arrayexpress/files/E-MTAB-181/E-MTAB-181.processed.1.zip", 
    "notes": null, 
    "long_description": "Heiser et al. have collected gene expression, genotype, and drug sensitivity data for 49 breast cancer cell lines.", 
    "readme_url": "http://www.ebi.ac.uk/arrayexpress/files/E-MTAB-181/E-MTAB-181.idf.txt;http://www.ebi.ac.uk/arrayexpress/files/E-MTAB-181/E-MTAB-181.sdrf.txt", 
    "publication": [
      {
        "pmid": "22003129", 
        "citation": "Heiser, L. M. et al. (2012) Subtype and pathway specific responses to anticancer compounds in breast cancer. Proceedings of the National Academy of Sciences of the United States of America. 109:2724-2729.", 
        "author": "Heiser et al."
      }
    ], 
    "resource_name": "Heiser"
  }, 
  {
    "association": "gene-phenotype associations by automated GWAS curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No", 
    "directory": "hugenavigator", 
    "resource_url": "http://www.hugenavigator.net/HuGENavigator/home.do", 
    "number_of_genes": null, 
    "data_description": "gene-phenotype associations extracted from published GWAS by automated text-mining", 
    "resource_description": "database of gene-phenotype associations extracted from published GWA studies by automated text-mining", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "must complete form at download page to download file", 
    "long_description": "HuGE Navigator is a database of gene-phenotype associations extracted from published GWA studies by automated text-mining.", 
    "readme_url": "http://www.hugenavigator.net/HuGENavigator/downloadCenter.do", 
    "publication": [
      {
        "pmid": "18227866", 
        "citation": "Yu, W., Gwinn, M., Clyne, M., Yesupriya, A. and M. J. Khoury. (2008) A navigator for human genome epidemiology. Nat Genet. 40:124-125.", 
        "author": "Yu et al."
      }
    ], 
    "resource_name": "HuGE Navigator"
  }, 
  {
    "association": "gene-metabolite associations by manual literature curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "metabolite", 
    "attribute_class": "small molecule", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "interactions", 
    "isok": null, 
    "directory": "hmdb", 
    "resource_url": "http://www.hmdb.ca/", 
    "number_of_genes": "3532", 
    "data_description": "biomolecular interactions between metabolites and proteins, such as processing enzymes, curated from literature", 
    "resource_description": "knowledgebase of chemical, clinial, and biological information about human metabolites", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "3906", 
    "data_class": "literature curation", 
    "data_url": "http://www.hmdb.ca/downloads/hmdb_metabolites.zip", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://www.hmdb.ca/downloads", 
    "publication": [
      {
        "pmid": "23161693", 
        "citation": "Wishart, D. S., Jewison, T., Guo, A. C., Wilson, M., Knox, C., Liu, Y., Djoumbou, Y., Mandal, R., Aziat, F., Dong, E., Bouatra, S., Sinelnikov, I., Arndt, D., Xia, J., Liu, P., Yallou, F., Bjorndahl, T., Perez-Pineiro, R., Eisner, R., Allen, F., Neveu, V., Greiner, R. and A. Scalbert. (2013) HMDB 3.0--The Human Metabolome Database in 2013. Nucleic Acids Res. 41:D801-D807.", 
        "author": "Wishart et al."
      }
    ], 
    "resource_name": "Human Metabolome Database"
  }, 
  {
    "association": "gene-phenotype associations by mapping disease genes to disease phenotypes", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "hpo", 
    "resource_url": "http://www.human-phenotype-ontology.org/", 
    "number_of_genes": "3095", 
    "data_description": "phenotype-causing gene mutations of human phenotypes from disease knowledgebases", 
    "resource_description": "database of abnormal human phenotypes annotated with diseases that cause the phenotypes and gene mutations that cause the diseases", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1779", 
    "data_class": null, 
    "data_url": "http://purl.obolibrary.org/obo/hp.obo;http://compbio.charite.de/hudson/job/hpo.annotations/lastStableBuild/artifact/misc/phenotype_annotation.tab;http://compbio.charite.de/hudson/job/hpo.annotations.monthly/lastStableBuild/artifact/annotation/ALL_SOURCES_ALL_FREQUENCIES_genes_to_phenotype.txt", 
    "notes": null, 
    "long_description": "The Human Phenotype Ontology is a controlled vocabulary of terms describing abnormal human phenotypes that are related to each other in a hierarchical network.  Each phenotype is annotated with diseases that cause the phenotypes and, if known, gene mutations that cause the diseases, using curated disease information obtained from OMIM, Orphanet and DECIPHER.", 
    "readme_url": "http://www.human-phenotype-ontology.org/contao/index.php/downloads.html;http://www.human-phenotype-ontology.org/contao/index.php/annotation-guide.html", 
    "publication": [
      {
        "pmid": "24217912", 
        "citation": "Kohler, S., Doelken, S. C., Mungall, C. J., Bauer, S., Firth, H. V., Bailleul-Forestier, I., Black, G. C., Brown, D. L., Brudno, M., Campbell, J., FitzPatrick, D. R., Eppig, J. T., Jackson, A. P., Freson, K., Girdea, M., Helbig, I., Hurst, J. A., Jahn, J., Jackson, L. G., Kelly, A. M., Ledbetter, D. H., Mansour, S., Martin, C. L., Moss, C., Mumford, A., Ouwehand, W. H., Park, S. M., Riggs, E. R., Scott, R. H., Sisodiya, S., Van Vooren, S., Wapner, R. J., Wilkie, A. O., Wright, C. F., Vulto-van Silfhout, A. T., de Leeuw, N., de Vries, B. B., Washingthon, N. L., Smith, C. L., Westerfield, M., Schofield, P., Ruef, B. J., Gkoutos, G. V., Haendel, M., Smedley, D., Lewis, S. E. and P. N. Robinson. (2014) The Human Phenotype Ontology project: linking molecular biology and disease through phenotype data. Nucleic Acids Res. 42:D966-D974.", 
        "author": "Kohler et al."
      }
    ], 
    "resource_name": "Human Phenotype Ontology (HPO)"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "hpacelllines", 
    "resource_url": "http://www.proteinatlas.org/", 
    "number_of_genes": "15372", 
    "data_description": "mRNA expression profiles for cell lines measured by RNA-Seq", 
    "resource_description": "database of protein and gene expression data for human tissues, cell types and cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "43", 
    "data_class": "functional genomics", 
    "data_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419__Excel_TablesS1-S18.xlsx;http://www.proteinatlas.org/download/rna.csv.zip", 
    "notes": "Supplementary Table 11 from the publication supplementary data file", 
    "long_description": "The Human Protein Atlas is a database of protein expression measured by immunohistochemistry (semi-quantitative) and gene expression measured by RNA-seq for many human tissues and cell lines.", 
    "readme_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419_Uhlen.SM.pdf;http://www.proteinatlas.org/about/download", 
    "publication": [
      {
        "pmid": "25613900", 
        "citation": "Uhlen, M., Fagerberg, L., Hallstrom, B. M., Lindskog, C., Oksvold, P., Mardinoglu, A., Sivertsson, A., Kampf, C., Sjostedt, E., Asplund, A., Olsson, I., Edlund, K.,Lundberg, E., Navani, S., Szigyarto, C. A., Odeberg, J., Djureinovic, D., Takanen, J. O., Hober, S., Alm, T., Edqvist, P. H., Berling, H., Tegel, H., Mulder, J., Rockberg, J., Nilsson, P., Schwenk, J. M., Hamsten, M., von Feilitzen, K., Forsberg, M., Persson, L., Johansson, F., Zwahlen, M., von Heijne, G., Nielsen, J. and F. Ponten. (2015) Tissue-based map of the human proteome. Science. 347:1260419.", 
        "author": "Uhlen et al."
      }
    ], 
    "resource_name": "Human Protein Atlas (HPA)"
  }, 
  {
    "association": "gene-tissue associations by differential expression of gene across tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "hpatissuesmrna", 
    "resource_url": "http://www.proteinatlas.org/", 
    "number_of_genes": "17426", 
    "data_description": "mRNA expression profiles for tissues measured by RNA-seq", 
    "resource_description": "database of protein and gene expression data for human tissues, cell types and cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "31", 
    "data_class": "functional genomics", 
    "data_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419__Excel_TablesS1-S18.xlsx;http://www.proteinatlas.org/download/rna.csv.zip", 
    "notes": "Supplementary Table 1 from the publication supplementary data file", 
    "long_description": "The Human Protein Atlas is a database of protein expression measured by immunohistochemistry (semi-quantitative) and gene expression measured by RNA-seq for many human tissues and cell lines.", 
    "readme_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419_Uhlen.SM.pdf;http://www.proteinatlas.org/about/download", 
    "publication": [
      {
        "pmid": "25613900", 
        "citation": "Uhlen, M., Fagerberg, L., Hallstrom, B. M., Lindskog, C., Oksvold, P., Mardinoglu, A., Sivertsson, A., Kampf, C., Sjostedt, E., Asplund, A., Olsson, I., Edlund, K.,Lundberg, E., Navani, S., Szigyarto, C. A., Odeberg, J., Djureinovic, D., Takanen, J. O., Hober, S., Alm, T., Edqvist, P. H., Berling, H., Tegel, H., Mulder, J., Rockberg, J., Nilsson, P., Schwenk, J. M., Hamsten, M., von Feilitzen, K., Forsberg, M., Persson, L., Johansson, F., Zwahlen, M., von Heijne, G., Nielsen, J. and F. Ponten. (2015) Tissue-based map of the human proteome. Science. 347:1260419.", 
        "author": "Uhlen et al."
      }
    ], 
    "resource_name": "Human Protein Atlas (HPA)"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "hpasamples", 
    "resource_url": "http://www.proteinatlas.org/", 
    "number_of_genes": "16658", 
    "data_description": "mRNA expression profiles for tissue samples measured by RNA-seq", 
    "resource_description": "database of protein and gene expression data for human tissues, cell types and cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "121", 
    "data_class": "functional genomics", 
    "data_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419__Excel_TablesS1-S18.xlsx", 
    "notes": "Supplementary Table 18 from the publication supplementary data file", 
    "long_description": "The Human Protein Atlas is a database of protein expression measured by immunohistochemistry (semi-quantitative) and gene expression measured by RNA-seq for many human tissues and cell lines.", 
    "readme_url": "http://www.sciencemag.org/content/suppl/2015/01/21/347.6220.1260419.DC1/1260419_Uhlen.SM.pdf;http://www.proteinatlas.org/about/download", 
    "publication": [
      {
        "pmid": "25613900", 
        "citation": "Uhlen, M., Fagerberg, L., Hallstrom, B. M., Lindskog, C., Oksvold, P., Mardinoglu, A., Sivertsson, A., Kampf, C., Sjostedt, E., Asplund, A., Olsson, I., Edlund, K.,Lundberg, E., Navani, S., Szigyarto, C. A., Odeberg, J., Djureinovic, D., Takanen, J. O., Hober, S., Alm, T., Edqvist, P. H., Berling, H., Tegel, H., Mulder, J., Rockberg, J., Nilsson, P., Schwenk, J. M., Hamsten, M., von Feilitzen, K., Forsberg, M., Persson, L., Johansson, F., Zwahlen, M., von Heijne, G., Nielsen, J. and F. Ponten. (2015) Tissue-based map of the human proteome. Science. 347:1260419.", 
        "author": "Uhlen et al."
      }
    ], 
    "resource_name": "Human Protein Atlas (HPA)"
  }, 
  {
    "association": "gene-tissue associations by differential expression of protein across tissues", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "proteomics", 
    "isok": "Yes", 
    "directory": "hpatissuesprotein", 
    "resource_url": "http://www.proteinatlas.org/", 
    "number_of_genes": "15706", 
    "data_description": "semiquantitative protein expression profiles for tissues measured by immunohistochemistry", 
    "resource_description": "database of protein and gene expression data for human tissues, cell types and cell lines", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "44", 
    "data_class": "functional genomics", 
    "data_url": "http://www.proteinatlas.org/download/normal_tissue.csv.zip", 
    "notes": null, 
    "long_description": "The Human Protein Atlas is a database of protein expression measured by immunohistochemistry (semi-quantitative) and gene expression measured by RNA-seq for many human tissues and cell lines.", 
    "readme_url": "http://www.proteinatlas.org/about/download", 
    "publication": [
      {
        "pmid": "25613900", 
        "citation": "Uhlen, M., Fagerberg, L., Hallstrom, B. M., Lindskog, C., Oksvold, P., Mardinoglu, A., Sivertsson, A., Kampf, C., Sjostedt, E., Asplund, A., Olsson, I., Edlund, K.,Lundberg, E., Navani, S., Szigyarto, C. A., Odeberg, J., Djureinovic, D., Takanen, J. O., Hober, S., Alm, T., Edqvist, P. H., Berling, H., Tegel, H., Mulder, J., Rockberg, J., Nilsson, P., Schwenk, J. M., Hamsten, M., von Feilitzen, K., Forsberg, M., Persson, L., Johansson, F., Zwahlen, M., von Heijne, G., Nielsen, J. and F. Ponten. (2015) Tissue-based map of the human proteome. Science. 347:1260419.", 
        "author": "Uhlen et al."
      }
    ], 
    "resource_name": "Human Protein Atlas (HPA)"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "hprd", 
    "resource_url": "http://www.hprd.org", 
    "number_of_genes": null, 
    "data_description": "protein-protein interactions from low-throughput or high-throughput studies", 
    "resource_description": "database of human protein-protein interactions", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://www.hprd.org/edownload/HPRD_Release9_041310", 
    "notes": null, 
    "long_description": "database of human protein-protein interactions", 
    "readme_url": "http://www.hprd.org/download", 
    "publication": [
      {
        "pmid": "18988627", 
        "citation": "Keshava Prasad, T. S., Goel, R., Kandasamy, K., Keerthikumar, S., Kumar, S., Mathivanan, S., Telikicherla, D., Raju, R., Shafreen, B., Venugopal, A., Balakrishnan, L., Marimuthu, A., Banerjee, S., Somanathan, D. S., Sebastian, A., Rani, S., Ray, S., Harrys Kishore, C. J., Kanth, S., Ahmed, M., Kashyap, M. K., Mohmood, R., Ramachandra, Y. L., Krishna, V., Rahiman, B. A., Mohan, S., Ranganathan, P., Ramabadran, S., Chaerkady, R. and A. Pandey. (2009) Human Protein Reference Database--2009 update. Nucleic Acids Research. 37:D767-772.", 
        "author": "Keshava Prasad et al."
      }
    ], 
    "resource_name": "Human Protein Resource Database (HPRD)"
  }, 
  {
    "association": "gene-tissue/cell line associations by differential expression of protein across tissues and cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue or cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "proteomics", 
    "isok": "Yes", 
    "directory": "hpm", 
    "resource_url": "http://www.humanproteomemap.org/", 
    "number_of_genes": null, 
    "data_description": "protein expression profiles for tissues and cell lines measured by mass spectrometry", 
    "resource_description": "database of protein expression data for tissues and cell lines measured by LC-MS/MS", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "must register for access", 
    "long_description": "The Human Proteome Map is a database of protein expression data for tissues and cell lines measured by LC-MS/MS.", 
    "readme_url": "http://www.humanproteomemap.org/faqs.html", 
    "publication": [
      {
        "pmid": "24870542", 
        "citation": "Kim, M. S. et al. (2014) A draft map of the human proteome. Nature. 509:575-581.", 
        "author": "Kim et al."
      }
    ], 
    "resource_name": "Human Proteome Map (HPM)"
  }, 
  {
    "association": "gene-gene associations from curated pathways", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "humancycppi", 
    "resource_url": "http://www.humancyc.org", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions by pathway", 
    "resource_description": "database of human metabolic pathways", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://www.humancyc.org/HUMAN/pathway-genes?object=PWY-6133", 
    "notes": "scrape html at http://www.humancyc.org/HUMAN/class-instances?object=Pathways for pathway IDs and then query for lists of genes using Data URL example", 
    "long_description": "database of human metabolic pathways", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "24225315", 
        "citation": "Caspi, R., Altman, T., Billington, R., Dreher, K., Foerster, H., Fulcher, C. A., Holland, T. A., Keseler, I. M., Kothari, A., Kubo, A., Krummenacker, M., Latendresse, M., Mueller, L. A., Ong, Q., Paley, S., Subhraveti, P., Weaver, D. S., Weerasinghe, D., Zhang, P. and P. D. Karp. (2014) The MetaCyc database of metabolic pathways and enzymes and the BioCyc collection of Pathway/Genome Databases. Nucleic Acids Res. 42:D459-D471.", 
        "author": "Caspi et al."
      }
    ], 
    "resource_name": "HumanCyc"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "humancyc", 
    "resource_url": "http://humancyc.org/;http://www.pathwaycommons.org/about/", 
    "number_of_genes": "932", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of human metabolic pathways", 
    "todo": "done", 
    "status": "ready", 
    "number_of_attributes": "286", 
    "data_class": "literature curation", 
    "data_url": "http://www.pathwaycommons.org/pc2/downloads/Pathway%20Commons.6.HumanCyc.GSEA.gmt.gz", 
    "notes": null, 
    "long_description": "database of human metabolic pathways", 
    "readme_url": "http://www.pathwaycommons.org/pc2/formats", 
    "publication": [
      {
        "pmid": "24225315", 
        "citation": "Caspi, R., Altman, T., Billington, R., Dreher, K., Foerster, H., Fulcher, C. A., Holland, T. A., Keseler, I. M., Kothari, A., Kubo, A., Krummenacker, M., Latendresse, M., Mueller, L. A., Ong, Q., Paley, S., Subhraveti, P., Weaver, D. S., Weerasinghe, D., Zhang, P. and P. D. Karp. (2014) The MetaCyc database of metabolic pathways and enzymes and the BioCyc collection of Pathway/Genome Databases. Nucleic Acids Res. 42:D459-D471.", 
        "author": "Caspi et al."
      }
    ], 
    "resource_name": "HumanCyc"
  }, 
  {
    "association": "gene-transcription factor associations predicted using known transcription factor binding site motifs", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "transcription factor", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "genomics", 
    "isok": null, 
    "directory": "jasparpwm", 
    "resource_url": "http://jaspar.genereg.net/", 
    "number_of_genes": "21989", 
    "data_description": "target genes of transcription factors  predicted using known transcription factor binding site motifs", 
    "resource_description": "database of transcription factor binding site motifs", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "326", 
    "data_class": "prediction", 
    "data_url": "http://jaspar.genereg.net/html/DOWNLOAD/", 
    "notes": null, 
    "long_description": null, 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "24194598", 
        "citation": "Mathelier, A., Zhao, X., Zhang, A. W., Parcy, F., Worsley-Hunt, R., Arenillas, D. J., Buchman, S., Chen, C. Y., Chou, A., Ienasescu, H., Lim, J., Shyr, C., Tan, G., Zhou, M., Lenhard, B., Sandelin, A. and W. W. Wasserman. (2014) JASPAR 2014: an extensively expanded and updated open-access database of transcription factor binding profiles. Nucleic Acids Res. 42:D142:D147.", 
        "author": "Mathelier et al."
      }
    ], 
    "resource_name": "Jaspar PWMs"
  }, 
  {
    "association": "kinase-substrate associations from low-throughput or high-throughput phosphoproteomics data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "substrate", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "Yes", 
    "directory": "kea", 
    "resource_url": "http://amp.pharm.mssm.edu/lib/kea.jsp", 
    "number_of_genes": "452", 
    "data_description": "protein substrates of kinases from published low-throughput and high-throughput phosphoproteomics studies", 
    "resource_description": "gene-set enrichment analysis tool testing for putative regulatory kinases of query gene-sets", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "3357", 
    "data_class": "data aggregation", 
    "data_url": "http://amp.pharm.mssm.edu/Enrichr/geneSetLibrary?mode=text&libraryName=KEA", 
    "notes": null, 
    "long_description": "Kinase Enrichment Analysis (KEA) is a gene-set enrichment analysis tool tailored to test if query gene-sets are enriched with genes known to interact with kinases.  KEA utilizes a gene-set library with kinases labeling sets of interacting proteins.  Many of the interacting proteins are known substrates of the kinases, and many of the kinase-substrate interactions are annotated with phosphosite-level detail (the specific phosphorylated amino acid residue(s) are indicated).  Kinase-substrate interactions in KEA were obtained by curation of biomedical literature and integrated with other databases of kinase-substrate interactions, such as  Phospho.ELM (Dinkel, Nucleic Acids Research, 2011) and PhosphoSitePlus (Hornbeck, Nucleic Acids Research, 2012).", 
    "readme_url": "http://amp.pharm.mssm.edu/lib/keacommandline.jsp", 
    "publication": [
      {
        "pmid": "19176546", 
        "citation": "Lachmann, A. et al. (2009) KEA: kinase enrichment analysis. Bioinformatics. 25:684-686.", 
        "author": "Lachmann et al."
      }
    ], 
    "resource_name": "Kinase Enrichment Analysis (KEA)"
  }, 
  {
    "association": "kinase-drug associations by percent inhibition of kinase by drug", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "drug", 
    "attribute_class": "small molecule", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "chemical bioactivity", 
    "isok": "Yes", 
    "directory": "kinativ", 
    "resource_url": "http://lincs.hms.harvard.edu/resources/assays/", 
    "number_of_genes": null, 
    "data_description": "percent inhibition of kinases by drugs measured in cell lysates", 
    "resource_description": "project profiling percent inhibition of kinase activity by drugs", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://lincs.hms.harvard.edu/db/datasets/20087/results?search=&output_type=.csv", 
    "notes": "data were downloaded using the template Data URL, using kinativ dataset IDs extracted from http://lincs.hms.harvard.edu/db/datasets/", 
    "long_description": "KiNativ is a Library of Integrated Network-based Cellular Signatures (LINCS) project that is profiling percent inhibition of kinase activity by drugs using cell lysates.", 
    "readme_url": "http://lincs.hms.harvard.edu/data/;https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit", 
    "publication": [
      {
        "pmid": "21700206", 
        "citation": "Patricelli, M. P., Nomanbhoy, T. K., Wu, J., Brown, H., Zhou, D., Zhang, J., Jagannathan, S., Aban, A., Okerberg, E., Herring, C., Nordin, B., Weissig, H., Yang, Q., Lee, J. D., Gray, N. S. and J. W. Kozarich. (2011) In situ kinase profiling reveals functionally relevant properties of native kinases. Chem Biol. 18:699-710.", 
        "author": "Patricelli et al."
      }
    ], 
    "resource_name": "Kinativ"
  }, 
  {
    "association": "kinase-drug associations by percent inhibition of kinase by drug", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "drug", 
    "attribute_class": "small molecule", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "chemical bioactivity", 
    "isok": "Yes", 
    "directory": "kinomescan", 
    "resource_url": "http://lincs.hms.harvard.edu/data/kinomescan/", 
    "number_of_genes": null, 
    "data_description": "percent inhibition of kinases by drugs measured using purified kinases", 
    "resource_description": "project profiling percent inhibition of kinase activity by drugs", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://lincs.hms.harvard.edu/db/datasets/20020/results?search=&output_type=.csv", 
    "notes": "data were downloaded using the template Data URL, using kinomescan dataset IDs extracted from http://lincs.hms.harvard.edu/db/datasets/", 
    "long_description": "KinomeScan is a Library of Integrated Network-based Cellular Signatures (LINCS) project that is profiling percent inhibition of kinase activity by drugs using purified kinases in vitro.", 
    "readme_url": "http://lincs.hms.harvard.edu/data/;https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit", 
    "publication": [
      {
        "pmid": "15711537", 
        "citation": "Fabian, M.A. et al. (2005) A small molecule-kinase interaction map for clinical kinase inhibitors. Nature Biotechnology. 23:329-336.", 
        "author": "Fabian et al."
      }
    ], 
    "resource_name": "KinomeScan"
  }, 
  {
    "association": "gene-cell line associations by differential expression of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "No", 
    "directory": "klijnmrna", 
    "resource_url": null, 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for cancer cell lines measured by RNA-seq", 
    "resource_description": "published gene expression, copy number variation, and mutation data for 675 cancer cell lines", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S11.zip", 
    "notes": null, 
    "long_description": "Klijn et al. have collected gene expression, copy number variation, and mutation data for 675 cancer cell lines.", 
    "readme_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S1.pdf", 
    "publication": [
      {
        "pmid": "25485619", 
        "citation": "Klijn, C. et al. (2015) A comprehensive transcriptional portrait of human cancer cell lines. Nat Biotechnol. 33:306-312.", 
        "author": "Klijn et al."
      }
    ], 
    "resource_name": "Klijn"
  }, 
  {
    "association": "gene-cell line associations by mutation of gene in cell line", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "No", 
    "directory": "klijnmut", 
    "resource_url": null, 
    "number_of_genes": null, 
    "data_description": "gene mutations in cancer cell lines measured by SNP microarray", 
    "resource_description": "published gene expression, copy number variation, and mutation data for 675 cancer cell lines", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S13.zip", 
    "notes": null, 
    "long_description": "Klijn et al. have collected gene expression, copy number variation, and mutation data for 675 cancer cell lines.", 
    "readme_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S1.pdf", 
    "publication": [
      {
        "pmid": "25485619", 
        "citation": "Klijn, C. et al. (2015) A comprehensive transcriptional portrait of human cancer cell lines. Nat Biotechnol. 33:306-312.", 
        "author": "Klijn et al."
      }
    ], 
    "resource_name": "Klijn"
  }, 
  {
    "association": "gene-cell line associations by copy number variation of gene across cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genomics", 
    "isok": "No", 
    "directory": "klijncnv", 
    "resource_url": null, 
    "number_of_genes": null, 
    "data_description": "gene-level copy number variation profiles for cancer cell lines measured by SNP microarray", 
    "resource_description": "published gene expression, copy number variation, and mutation data for 675 cancer cell lines", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S14.zip", 
    "notes": null, 
    "long_description": "Klijn et al. have collected gene expression, copy number variation, and mutation data for 675 cancer cell lines.", 
    "readme_url": "http://www.nature.com/nbt/journal/v33/n3/extref/nbt.3080-S1.pdf", 
    "publication": [
      {
        "pmid": "25485619", 
        "citation": "Klijn, C. et al. (2015) A comprehensive transcriptional portrait of human cancer cell lines. Nat Biotechnol. 33:306-312.", 
        "author": "Klijn et al."
      }
    ], 
    "resource_name": "Klijn"
  }, 
  {
    "association": "gene-gene associations from curated pathways", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "keggppi", 
    "resource_url": "http://www.genome.jp/kegg/", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions by pathway", 
    "resource_description": "database of curated pathways", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": null, 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "24214961", 
        "citation": "Kanehisa, M., Goto, S., Sato, Y., Kawashima, M., Furumichi, M. and M. Tanabe. (2014) Data, information, knowledge and principle: back to metabolism in KEGG. Nucleic Acids Research. 42:D199-205.", 
        "author": "Kanehisa et al."
      }
    ], 
    "resource_name": "Kyoto Encyclopedia of Genes and Genomes (KEGG)"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "18", 
      "month": "08", 
      "year": "2011"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No (L)", 
    "directory": "kegg", 
    "resource_url": "http://www.genome.jp/kegg/", 
    "number_of_genes": "3947", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of curated pathways", 
    "todo": "done", 
    "status": "pending", 
    "number_of_attributes": "200", 
    "data_class": "literature curation", 
    "data_url": null, 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "24214961", 
        "citation": "Kanehisa, M., Goto, S., Sato, Y., Kawashima, M., Furumichi, M. and M. Tanabe. (2014) Data, information, knowledge and principle: back to metabolism in KEGG. Nucleic Acids Research. 42:D199-205.", 
        "author": "Kanehisa et al."
      }
    ], 
    "resource_name": "Kyoto Encyclopedia of Genes and Genomes (KEGG)"
  }, 
  {
    "association": "gene-gene associations by differential expression of gene A following knockdown of gene B", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "lincscmapgene", 
    "resource_url": "http://www.lincscloud.org/l1000/", 
    "number_of_genes": "3641", 
    "data_description": "mRNA expression profiles for cell lines following gene knockdown measured using the L1000 bead-based expression assay", 
    "resource_description": "database of gene expression profiles for cell lines following pharmacologic or genetic perturbation", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": "12505", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded from the cloud via Amazon S3", 
    "long_description": "The L1000 Connectivity Map is a Library of Integrated Network-based Cellular Signatures (LINCS) project that is profiling gene expression changes following pharmacologic or genetic (knockdown or over-expression) perturbation of cell lines in high-throughput (approximately 20000 compounds, 4500 knockdowns, and 3000 over-expressions).  The majority of the knockdown perturbations were applied to a core set of 8 cell lines, A375, A549, HA1E, HCC515, HEPG2, HT29, MCF7, and PC3, and most gene expression profiles were measured 96 hours after knockdown.  A signature of differentially expressed (DE) genes can be obtained from a set of control and perturbed gene expression profiles by applying a statistical method such as the Characteristic Direction.  The signature of DE genes usually takes the form of a list of genes ordered by the direction (up-regulated or down-regulated) and significance of the gene expression change.  A number that indicates the relative significance of differential expression can be included with each gene.", 
    "readme_url": "http://download.lincscloud.org/", 
    "publication": [
      {
        "pmid": "24906883", 
        "citation": "Duan, Q. et al. (2014) LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures. Nucleic Acids Research.", 
        "author": "Duan et al."
      }
    ], 
    "resource_name": "LINCS L1000 Connectivity Map (CMAP)"
  }, 
  {
    "association": "gene-chemical associations by differential expression of gene following chemical perturbation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "chemical", 
    "attribute_class": "chemical", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "lincscmapchemical", 
    "resource_url": "http://www.lincscloud.org/l1000/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for cell lines following  chemical perturbation measured using the L1000 bead-based expression assay", 
    "resource_description": "database of gene expression profiles for cell lines following pharmacologic or genetic perturbation", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded from the cloud via Amazon S3", 
    "long_description": "The L1000 Connectivity Map is a Library of Integrated Network-based Cellular Signatures (LINCS) project that is profiling gene expression changes following pharmacologic or genetic (knockdown or over-expression) perturbation of cell lines in high-throughput (approximately 20000 compounds, 4500 knockdowns, and 3000 over-expressions).  The majority of the knockdown perturbations were applied to a core set of 8 cell lines, A375, A549, HA1E, HCC515, HEPG2, HT29, MCF7, and PC3, and most gene expression profiles were measured 96 hours after knockdown.", 
    "readme_url": "http://download.lincscloud.org/", 
    "publication": [
      {
        "pmid": "24906883", 
        "citation": "Duan, Q. et al. (2014) LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures. Nucleic Acids Research.", 
        "author": "Duan et al."
      }
    ], 
    "resource_name": "LINCS L1000 Connectivity Map (CMAP)"
  }, 
  {
    "association": "gene-phenotype associations from phenotyping studies of knockout mice", 
    "download_date": {
      "day": "09", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "mgimpo", 
    "resource_url": "http://www.informatics.jax.org/phenotypes.shtml", 
    "number_of_genes": "7798", 
    "data_description": "observed phenotypes of transgenic mice collected from mouse phenotyping studies", 
    "resource_description": "database of mouse genotypes annotated with mouse phenotype terms selected from a controlled vocabulary", 
    "todo": "compare code for mapping to ontology to same section in GO and Jensen scripts, include code for creating ontology structure", 
    "status": "ready", 
    "number_of_attributes": "8579", 
    "data_class": "data aggregation", 
    "data_url": "ftp://ftp.informatics.jax.org/pub/reports/MGI_PhenoGenoMP.rpt;ftp://ftp.informatics.jax.org/pub/reports/MRK_List2.rpt;ftp://ftp.informatics.jax.org/pub/reports/HMD_HumanPhenotype.rpt;ftp://ftp.informatics.jax.org/pub/reports/MGI_PhenotypicAllele.rpt;ftp://ftp.informatics.jax.org/pub/reports/MPheno_OBO.ontology", 
    "notes": null, 
    "long_description": "The Mammalian Phenotype Ontology developed by Mouse Genome Informatics (MGI) at the Jackson Laboratory is a controlled vocabulary of mouse phenotype terms that are related to each other in a hierarchical network.  Each phenotype is annotated with the genotypes of the mice that display the phenotype.", 
    "readme_url": "ftp://ftp.informatics.jax.org/pub/reports/index.html#pheno", 
    "publication": [
      {
        "pmid": "24285300", 
        "citation": "Blake, J.A. et al. (2014) The Mouse Genome Database: integration of and access to knowledge about the laboratory mouse. Nucleic Acids Research. 42:D810-817.", 
        "author": "Blake et al."
      }
    ], 
    "resource_name": "Mammalian Phenotype Ontology (MPO)"
  }, 
  {
    "association": "gene-microRNA associations from low-throughput or high-throughput microRNA targeting studies", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "microRNA", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "interactions", 
    "isok": "Yes", 
    "directory": "mirtarbase", 
    "resource_url": "http://mirtarbase.mbc.nctu.edu.tw/", 
    "number_of_genes": null, 
    "data_description": "target genes of microRNAs from published experiments", 
    "resource_description": "database of experimentally validated microRNA targets", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://mirtarbase.mbc.nctu.edu.tw/cache/download/4.5/hsa_MTI.xls", 
    "notes": null, 
    "long_description": "database of experimentally validated microRNA targets", 
    "readme_url": "http://mirtarbase.mbc.nctu.edu.tw/php/download.php", 
    "publication": [
      {
        "pmid": "24304892", 
        "citation": "Hsu, S. D., Tseng, Y. T., Shrestha, S., Lin, Y. L., Khaleel, A., Chou, C. H., Chu, C. F., Huang, H. Y., Lin, C. M., Ho, S. Y., Jian, T. Y., Lin, F. M., Chang, T. H., Weng, S. L., Liao, K. W., Liao, I. E., Liu, C. C. and H. D. Huang. (2014) miRTarBase update 2014: an information resource for experimentally validated miRNA-target interactions. Nucleic Acids Res. 42:D78-D85.", 
        "author": "Hsu et al."
      }
    ], 
    "resource_name": "MiRTarBase"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "intact", 
    "resource_url": "http://www.ebi.ac.uk/intact/", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions from low-throughput or high-throughput studies", 
    "resource_description": "database of biomolecular interactions", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "ftp://ftp.ebi.ac.uk/pub/databases/intact/current/psimitab/intact-micluster.zip", 
    "notes": null, 
    "long_description": "database of biomolecular interactions", 
    "readme_url": "ftp://ftp.ebi.ac.uk/pub/databases/intact/current/psimitab/README", 
    "publication": [
      {
        "pmid": "22121220", 
        "citation": "Kerrien, S., Aranda, B., Breuza, L., Bridge, A., Broackes-Carter, F., Chen, C., Duesbury, M., Dumousseau, M., Feuermann, M., Hinz, U., Jandrasits, C., Jimenez, R. C., Khadake, J., Mahadevan, U., Masson, P., Pedruzzi, I., Pfeiffenberger, E., Porras, P., Raghunath, A., Roechert, B., Orchard, S. and H. Hermjakob. (2012) The IntAct molecular interaction database in 2012. Nucleic Acids Research. 40:D841-846.", 
        "author": "Kerrien et al."
      }
    ], 
    "resource_name": "Molecular Interaction Database (IntAct)"
  }, 
  {
    "association": "gene-gene associations by co-expression of genes across collections of microarray samples ", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "msigdbcomp", 
    "resource_url": "http://www.broadinstitute.org/gsea/msigdb/index.jsp", 
    "number_of_genes": "10028", 
    "data_description": "computational signatures of genes co-expressed with cancer related genes", 
    "resource_description": "database of gene signatures for gene-set enrichment analysis", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "858", 
    "data_class": "functional genomics", 
    "data_url": "http://www.broadinstitute.org/gsea/msigdb/download_file.jsp?filePath=/resources/msigdb/5.0/c4.all.v5.0.symbols.gmt", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://www.broadinstitute.org/gsea/msigdb/collections.jsp", 
    "publication": [
      {
        "pmid": "16199517", 
        "citation": "Subramanian, A., Tamayo, P., Mootha, V. K., Mukherjee, S., Ebert, B. L., Gillette, M. A., Paulovich, A., Pomeroy, S. L., Golub, T. R., Lander, E. S. and J. P. Mesirov. (2005) Gene set enrichment analysis: a knowledge-based approach for interpreting genome-wide expression profiles. Proc Natl Acad Sci U S A. 102:15545-15550.", 
        "author": "Subramanian et al."
      }
    ], 
    "resource_name": "Molecular Signatures Database (MSigDB)"
  }, 
  {
    "association": "gene-gene associations by differential expression of gene A following perturbation of gene B", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": null, 
    "directory": "msigdbonc", 
    "resource_url": "http://www.broadinstitute.org/gsea/msigdb/index.jsp", 
    "number_of_genes": "11043", 
    "data_description": "oncogenic signatures of genes differentially expressed following cancer gene perturbations", 
    "resource_description": "database of gene signatures for gene-set enrichment analysis", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "189", 
    "data_class": "functional genomics", 
    "data_url": "http://www.broadinstitute.org/gsea/msigdb/download_file.jsp?filePath=/resources/msigdb/5.0/c6.all.v5.0.symbols.gmt", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://www.broadinstitute.org/gsea/msigdb/collections.jsp", 
    "publication": [
      {
        "pmid": "16199517", 
        "citation": "Subramanian, A., Tamayo, P., Mootha, V. K., Mukherjee, S., Ebert, B. L., Gillette, M. A., Paulovich, A., Pomeroy, S. L., Golub, T. R., Lander, E. S. and J. P. Mesirov. (2005) Gene set enrichment analysis: a knowledge-based approach for interpreting genome-wide expression profiles. Proc Natl Acad Sci U S A. 102:15545-15550.", 
        "author": "Subramanian et al."
      }
    ], 
    "resource_name": "Molecular Signatures Database (MSigDB)"
  }, 
  {
    "association": "gene-gene associations by identification of protein A in complex with protein B using IP-MS", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "proteomics", 
    "isok": "Yes", 
    "directory": "nursa", 
    "resource_url": "http://www.nursa.org/nursa/index.jsf", 
    "number_of_genes": "7786", 
    "data_description": "proteins identified by mass spectrometry in complexes isolated from cultured cells by immuno-precipitation", 
    "resource_description": "knowledgebase for nuclear receptors, their ligands, and coregulators", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "1090", 
    "data_class": "functional genomics", 
    "data_url": "http://www.sciencedirect.com/science/MiamiMultiMediaURL/1-s2.0-S0092867411005320/1-s2.0-S0092867411005320-mmc1.xls/272196/FULL/S0092867411005320/340a6aa086272fd1d492a1e19a9b412b/mmc1.xls;http://www.sciencedirect.com/science/MiamiMultiMediaURL/1-s2.0-S0092867411005320/1-s2.0-S0092867411005320-mmc2.xls/272196/FULL/S0092867411005320/1abd8960d2caecdf38c60de1b0a08cdc/mmc2.xls", 
    "notes": null, 
    "long_description": "The Nuclear Receptor Signaling Atlas is a knowledgebase for nuclear receptors, their ligands, and coregulators.  NURSA hosts a high content proteomics dataset consisting of 3000 immuno-precipitations followed by mass spectrometry.  This dataset is essentially a gene-set library where each term is a pulled-down protein, which is associated with a set of co-precipitated proteins.  Each immuno-precipitation provides a snapshot of the proteins interacting directly or indirectly in a complex or complexes with the pulled-down protein.", 
    "readme_url": "http://www.nursa.org/nursa/datasets/dataset.jsf?doi=10.1621/datasets.06003", 
    "publication": [
      {
        "pmid": "21620140", 
        "citation": "Malovannaya, A. et al. (2011) Analysis of the human endogenous coregulator complexome. Cell. 145:787-799.", 
        "author": "Malovannaya et al."
      }
    ], 
    "resource_name": "Nuclear Receptor Signaling Atlas (NURSA)"
  }, 
  {
    "association": "gene-phenotype associations by literature evidence for phenotype-causing gene mutations", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "omim", 
    "resource_url": "http://www.omim.org/", 
    "number_of_genes": "4553", 
    "data_description": "disease- or phenotype-causing gene mutations for heritable human diseases or phenotypes curated from biomedical publications", 
    "resource_description": "knowledgebase for heritable human diseases and other phenotypes", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": "6175", 
    "data_class": "literature curation", 
    "data_url": null, 
    "notes": "must register for access", 
    "long_description": "Online Mendelian Inheritance in Man is a database of human phenotypes (e.g. diseases) with known genetic basis.  Each entry in OMIM summarizes the current state of knowledge about a gene or phenotype, with a focus on inheritance.  Genotype/phenotype associations are summarized in a document called the Morbid Map, which lists phenotypes alongside the genes that have mutations known to play a role in manifestation of the phenotype.", 
    "readme_url": "http://www.omim.org/downloads", 
    "publication": [
      {
        "pmid": "21472891", 
        "citation": "Amberger, J. et al. (2011) A new face and new challenges for Online Mendelian Inheritance in Man (OMIM(R)). Human Mutation. 32:564-567.", 
        "author": "Amberger et al."
      }
    ], 
    "resource_name": "Online Mendelian Inheritance in Man (OMIM)"
  }, 
  {
    "association": "gene-gene associations from curated pathways", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "pantherppi", 
    "resource_url": "http://www.pantherdb.org", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions by pathway", 
    "resource_description": "database of protein families, phylogenetic trees, functions, and pathways", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "ftp://ftp.pantherdb.org//pathway/current_release/BioPAX.tar.gz", 
    "notes": null, 
    "long_description": "database of protein families, phylogenetic trees, functions, and pathways", 
    "readme_url": "ftp://ftp.pantherdb.org//pathway/current_release/README", 
    "publication": [
      {
        "pmid": "23193289", 
        "citation": "Mi, H., Muruganujan, A. and P. D. Thomas. (2013) PANTHER in 2013: modeling the evolution of gene function, and other gene attributes, in the context of phylogenetic trees. Nucleic Acids Res. 41:D377-D386.", 
        "author": "Mi et al."
      }
    ], 
    "resource_name": "PANTHER"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No (L)", 
    "directory": "panther", 
    "resource_url": "http://pantherdb.org/;http://www.pathwaycommons.org/about/", 
    "number_of_genes": "1962", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of protein families, phylogenetic trees, functions, and pathways", 
    "todo": "done", 
    "status": "pending", 
    "number_of_attributes": "145", 
    "data_class": "literature curation", 
    "data_url": "http://www.pathwaycommons.org/pc2/downloads/Pathway%20Commons.6.PANTHER%20Pathway.GSEA.gmt.gz", 
    "notes": null, 
    "long_description": "database of protein families, phylogenetic trees, functions, and pathways", 
    "readme_url": "http://www.pathwaycommons.org/pc2/formats", 
    "publication": [
      {
        "pmid": "23193289", 
        "citation": "Mi, H., Muruganujan, A. and P. D. Thomas. (2013) PANTHER in 2013: modeling the evolution of gene function, and other gene attributes, in the context of phylogenetic trees. Nucleic Acids Res. 41:D377-D386.", 
        "author": "Mi et al."
      }
    ], 
    "resource_name": "PANTHER"
  }, 
  {
    "association": "gene-gene associations from low-throughput or high-throughput protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "pc", 
    "resource_url": "http://www.pathwaycommons.org/", 
    "number_of_genes": "15747", 
    "data_description": "protein-protein interactions from low-throughput or high-throughput studies aggregated by Pathway Commons from the following databases: Reactome, NCI Pathways, PhosphoSite, HumanCyc, HPRD, PANTHER, DIP, BioGRID, IntAct, BIND, Transfac, MiRTarBase, Drugbank, Recon X, Comparative Toxicogenomics Database, and KEGG", 
    "resource_description": "database of biological pathways and biomolecular interactions aggregated from many source databases", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "15747", 
    "data_class": "literature curation and data aggregation", 
    "data_url": "http://www.pathwaycommons.org/pc2/downloads/Pathway%20Commons.7.All.EXTENDED_BINARY_SIF.hgnc.sif.gz", 
    "notes": "extracted only interactions classified as controls-state-change-of, controls-transport-of, controls-phosphorylation-of, or interacts-with", 
    "long_description": "Pathway Commons is a database of biological pathways and biomolecular interactions aggregated from many source databases.  Pathway Commons has biomolecular interaction data from Reactome, NCI Pathways, PhosphoSite, HumanCyc, HPRD, PANTHER, DIP, BioGRID, IntAct, BIND, Transfac, MiRTarBase, Drugbank, Recon X, Comparative Toxicogenomics Database, and KEGG.  Interactions are classified as controls-state-change-of, controls-transport-of, controls-phosphorylation-of, controls-expression-of, catalysis-precedes, in-complex-with, interacts-with, neighbor-of, consumption-controled-by, controls-production-of, and controls-transport-of-chemical.", 
    "readme_url": "http://www.pathwaycommons.org/pc2/formats;http://www.pathwaycommons.org/pc2/downloads/datasources.txt", 
    "publication": [
      {
        "pmid": "21071392", 
        "citation": "Cerami, E. G., Gross, B. E., Demir, E., Rodchenkov, I., Babur, O., Anwar, N., Schultz, N., Bader, G. D. and C. Sander. (2011) Pathway Commons, a web resource for biological pathway data. Nucleic Acids Res. 39:D685-D690.", 
        "author": "Cerami et al."
      }
    ], 
    "resource_name": "Pathway Commons (PC)"
  }, 
  {
    "association": "gene-gene associations from curated pathways", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "pidppi", 
    "resource_url": "http://pid.nci.nih.gov/", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions by pathway", 
    "resource_description": "database of curated pathways", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "ftp://ftp1.nci.nih.gov/pub/PID/BioPAX_Level_3/NCI-Nature_Curated.bp3.owl.gz", 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": "http://pid.nci.nih.gov/userguide/output_formats.shtml", 
    "publication": [
      {
        "pmid": "18832364", 
        "citation": "Schaefer, C. F., Anthony, K., Krupa, S., Buchoff, J., Day, M., Hannay, T. and K. H. Buetow. (2009) PID: the Pathway Interaction Database. Nucleic Acids Res. 37:D674-679.", 
        "author": "Schaefer et al."
      }
    ], 
    "resource_name": "Pathway Interaction Database (PID)"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "pid", 
    "resource_url": "http://pid.nci.nih.gov/", 
    "number_of_genes": "2510", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of curated pathways", 
    "todo": "done", 
    "status": "ready", 
    "number_of_attributes": "223", 
    "data_class": "literature curation", 
    "data_url": "ftp://ftp1.nci.nih.gov/pub/PID/uniprot/uniprot.tab.gz", 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": "http://pid.nci.nih.gov/userguide/output_formats.shtml", 
    "publication": [
      {
        "pmid": "18832364", 
        "citation": "Schaefer, C. F., Anthony, K., Krupa, S., Buchoff, J., Day, M., Hannay, T. and K. H. Buetow. (2009) PID: the Pathway Interaction Database. Nucleic Acids Res. 37:D674-679.", 
        "author": "Schaefer et al."
      }
    ], 
    "resource_name": "Pathway Interaction Database (PID)"
  }, 
  {
    "association": "kinase-substrate associations from low-throughput or high-throughput phosphoproteomics data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phosphorylated protein", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "phosphositeplus", 
    "resource_url": "http://www.phosphosite.org", 
    "number_of_genes": null, 
    "data_description": "kinase-substrate interactions curated from low-throughput or high-throughput phosphoproteomics studies", 
    "resource_description": "knowledgebase of protein post-translational modifications", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": "http://www.phosphosite.org/downloads/Kinase_Substrate_Dataset.gz", 
    "notes": null, 
    "long_description": "knowledgebase of protein post-translational modifications", 
    "readme_url": "http://www.phosphosite.org/staticDownloads.do", 
    "publication": [
      {
        "pmid": "25514926", 
        "citation": "Hornbeck, P. V., Zhang, B., Murray, B., Kornhauser, J. M., Latham, V. and E. Skrzypek. (2015) PhosphoSitePlus, 2014: mutations, PTMs and recalibrations. Nucleic Acids Res. 43:D512-520.", 
        "author": "Hornbeck et al."
      }
    ], 
    "resource_name": "PhosphoSitePlus"
  }, 
  {
    "association": "gene-hub associations from aggregated protein-protein interaction data", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "hub", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": null, 
    "directory": "hubs", 
    "resource_url": null, 
    "number_of_genes": "9482", 
    "data_description": "sets of proteins interacting with hub proteins", 
    "resource_description": "dataset of proteins interacting directly with hub proteins", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "385", 
    "data_class": "data aggregation", 
    "data_url": null, 
    "notes": null, 
    "long_description": null, 
    "readme_url": null, 
    "publication": [
      {
        "pmid": null, 
        "citation": null, 
        "author": null
      }
    ], 
    "resource_name": "Hub Proteins"
  }, 
  {
    "association": "gene-tissue/cell line associations by differential expression of protein across tissues and cell lines", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue or cell line", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "proteomics", 
    "isok": "Yes", 
    "directory": "proteomicsdb", 
    "resource_url": "https://www.proteomicsdb.org/", 
    "number_of_genes": "2776", 
    "data_description": "protein expression profiles for tissues and cell lines reprocessed from many proteomics datasets", 
    "resource_description": "database of protein expression data for tissues and cell lines aggregated from many proteomics studies", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": "53", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data were downloaded using the proteomicsdb api", 
    "long_description": "Proteomics Database is a database of protein expression data for tissues and cell lines aggregated from many proteomics studies.", 
    "readme_url": "https://www.proteomicsdb.org/#api", 
    "publication": [
      {
        "pmid": "24870543", 
        "citation": "Wilhelm, M. et al. (2014) Mass-spectrometry-based draft of the human proteome. Nature. 509:582-587.", 
        "author": "Wilhelm et al."
      }
    ], 
    "resource_name": "Proteomics Database (ProteomicsDB)"
  }, 
  {
    "association": "gene-gene associations from curated pathways", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "Yes", 
    "directory": "reactomeppi", 
    "resource_url": "http://www.reactome.org", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions by pathway", 
    "resource_description": "database of curated pathways", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "literature curation", 
    "data_url": "http://www.reactome.org/download/current/homo_sapiens.mitab.interactions.txt.gz", 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": "http://wiki.reactome.org/index.php/PSI-MITAB_interactions", 
    "publication": [
      {
        "pmid": "24243840", 
        "citation": "Croft, D., Mundo, A. F., Haw, R., Milacic, M., Weiser, J., Wu, G., Caudy, M., Garapati, P., Gillespie, M., Kamdar, M. R., Jassal, B., Jupe, S., Matthews, L., May, B., Palatnik, S., Rothfels, K., Shamovsky, V., Song, H., Williams, M., Birney, E., Hermjakob, H., Stein, L. and P. D'Eustachio. (2014) The Reactome pathway knowledgebase. Nucleic Acids Research. 42:D472-477.", 
        "author": "Croft et al."
      }
    ], 
    "resource_name": "Reactome"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "reactome", 
    "resource_url": "http://www.reactome.org", 
    "number_of_genes": "7535", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of curated pathways", 
    "todo": "done", 
    "status": "ready", 
    "number_of_attributes": "1638", 
    "data_class": "literature curation", 
    "data_url": "http://www.reactome.org/download/current/ReactomePathways.gmt.zip", 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": "http://www.reactome.org/pages/download-data/", 
    "publication": [
      {
        "pmid": "24243840", 
        "citation": "Croft, D., Mundo, A. F., Haw, R., Milacic, M., Weiser, J., Wu, G., Caudy, M., Garapati, P., Gillespie, M., Kamdar, M. R., Jassal, B., Jupe, S., Matthews, L., May, B., Palatnik, S., Rothfels, K., Shamovsky, V., Song, H., Williams, M., Birney, E., Hermjakob, H., Stein, L. and P. D'Eustachio. (2014) The Reactome pathway knowledgebase. Nucleic Acids Research. 42:D472-477.", 
        "author": "Croft et al."
      }
    ], 
    "resource_name": "Reactome"
  }, 
  {
    "association": "gene-gene associations from reconstructed metabolic network", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "gene", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "reconx", 
    "resource_url": "http://humanmetabolism.org/", 
    "number_of_genes": null, 
    "data_description": "biomolecular interactions from network reconstruction", 
    "resource_description": "network model of human metabolism", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "prediction", 
    "data_url": "http://humanmetabolism.org/wp-content/uploads/2013/08/Recon2.v03.mat_.zip", 
    "notes": null, 
    "long_description": "network model of human metabolism", 
    "readme_url": "http://humanmetabolism.org/?page_id=75", 
    "publication": [
      {
        "pmid": "23455439", 
        "citation": "Thiele, I., Swainston, N., Fleming, R. M., Hoppe, A., Sahoo, S., Aurich, M. K., Haraldsdottir, H., Mo, M. L., Rolfsson, O., Stobbe, M. D., Thorleifsson, S. G., Agren, R., Bolling, C., Bordel, S., Chavali, A. K., Dobson, P., Dunn, W. B., Endler, L., Hala, D., Hucka, M., Hull, D., Jameson, D., Jamshidi, N., Jonsson, J. J., Juty, N., Keating, S., Nookaew, I., Le Novere, N., Malys, N., Mazein, A., Papin, J. A., Price, N. D., Selkov, E. Sr., Sigurdsson, M. I., Simeonidis, E., Sonnenschein, N., Smallbone, K., Sorokin, A., van Beek, J. H., Weichart, D., Goryanin, I., Nielsen, J., Westerhoff, H. V., Kell, D. B., Mendes, P. and B. O. Palsson. (2013) A community-driven global reconstruction of human metabolism. Nat Biotechnol. 31:419-425.", 
        "author": "Thiele et al."
      }
    ], 
    "resource_name": "Recon X"
  }, 
  {
    "association": "gene-cell or tissue sample associations by differential modification of histones near gene across cell and tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell or tissue sample (sample defined by cell or tissue type and histone modification)", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "gene_set_library": "gene_set_library_fuzzy.gmt.gz"
    }, 
    "data_type": "epigenomics", 
    "isok": "Yes", 
    "directory": "epigenomicshm", 
    "resource_url": "http://www.roadmapepigenomics.org/", 
    "number_of_genes": "21174", 
    "data_description": "histone modification profiles for primary cells and tissues measured by ChIP-seq", 
    "resource_description": "project mapping the distribution of histones, DNA binding factors, and accessory proteins on the human genome, as well as the genomic distribution of covalent modifications on DNA and nucleoproteins, for stem cells, differentiated cells, and primary tissues", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "200", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "need to complete", 
    "long_description": "The Roadmap Epigenomics project is a genome mapping project that is measuring the genomic distribution of nucleoproteins such as histones, DNA binding factors, and accessory proteins, as well as the genomic pattern of reversible covalent modifications on DNA and nucleoproteins.  The goal of the Roadmap Epigenomics project is to create a set of reference epigenomic maps for stem cells, differentiated cells, and primary tissues. The project is mapping DNA methylation sites, histone modification sites, transcription factor binding sites, and chromatin accessibility sites. RNA transcripts are also measured by RNA-seq.", 
    "readme_url": "http://egg2.wustl.edu/roadmap/web_portal/processed_data.html", 
    "publication": [
      {
        "pmid": "25693563", 
        "citation": "Roadmap Epigenomics Consortium et al. (2015) Integrative analysis of 111 reference human epigenomes. Nature. 518:317-330.", 
        "author": "Roadmap Epigenomics Consortium et al. et al."
      }, 
      {
        "pmid": "20944595", 
        "citation": "Bernstein, B. E., Stamatoyannopoulos, J. A., Costello, J. F., Ren, B., Milosavljevic, A., Meissner, A., Kellis, M., Marra, M. A., Beaudet, A. L., Ecker, J. R., Farnham, P. J., Hirst, M., Lander, E. S., Mikkelsen, T. S. and J. A. Thomson. (2010) The NIH Roadmap Epigenomics Mapping Consortium. Nat Biotechnol. 28:1045-1048.", 
        "author": "Bernstein et al."
      }
    ], 
    "resource_name": "Roadmap Epigenomics"
  }, 
  {
    "association": "gene-cell or tissue associations by differential methylation of gene across cell and tissue types", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell or tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "epigenomics", 
    "isok": "Yes", 
    "directory": "epigenomicsdnamethylation", 
    "resource_url": "http://www.roadmapepigenomics.org/", 
    "number_of_genes": null, 
    "data_description": "DNA methylation profiles for primary cells and tissues measured by bisulfite sequencing, MeDIP-seq or MRE-seq", 
    "resource_description": "project mapping the distribution of histones, DNA binding factors, and accessory proteins on the human genome, as well as the genomic distribution of covalent modifications on DNA and nucleoproteins, for stem cells, differentiated cells, and primary tissues", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "need to complete", 
    "long_description": "The Roadmap Epigenomics project is a genome mapping project that is measuring the genomic distribution of nucleoproteins such as histones, DNA binding factors, and accessory proteins, as well as the genomic pattern of reversible covalent modifications on DNA and nucleoproteins.  The goal of the Roadmap Epigenomics project is to create a set of reference epigenomic maps for stem cells, differentiated cells, and primary tissues. The project is mapping DNA methylation sites, histone modification sites, transcription factor binding sites, and chromatin accessibility sites. RNA transcripts are also measured by RNA-seq.", 
    "readme_url": "http://egg2.wustl.edu/roadmap/web_portal/processed_data.html", 
    "publication": [
      {
        "pmid": "25693563", 
        "citation": "Roadmap Epigenomics Consortium et al. (2015) Integrative analysis of 111 reference human epigenomes. Nature. 518:317-330.", 
        "author": "Roadmap Epigenomics Consortium et al. et al."
      }, 
      {
        "pmid": "20944595", 
        "citation": "Bernstein, B. E., Stamatoyannopoulos, J. A., Costello, J. F., Ren, B., Milosavljevic, A., Meissner, A., Kellis, M., Marra, M. A., Beaudet, A. L., Ecker, J. R., Farnham, P. J., Hirst, M., Lander, E. S., Mikkelsen, T. S. and J. A. Thomson. (2010) The NIH Roadmap Epigenomics Mapping Consortium. Nat Biotechnol. 28:1045-1048.", 
        "author": "Bernstein et al."
      }
    ], 
    "resource_name": "Roadmap Epigenomics"
  }, 
  {
    "association": "gene-cell or tissue associations by differential accessibility of gene across cell and tissue types", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell or tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "epigenomics", 
    "isok": "Yes", 
    "directory": "epigenomicsdnaaccessibility", 
    "resource_url": "http://www.roadmapepigenomics.org/", 
    "number_of_genes": null, 
    "data_description": "DNA accessibility profiles for primary cells and tissues measured by Dnase-seq", 
    "resource_description": "project mapping the distribution of histones, DNA binding factors, and accessory proteins on the human genome, as well as the genomic distribution of covalent modifications on DNA and nucleoproteins, for stem cells, differentiated cells, and primary tissues", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "need to complete", 
    "long_description": "The Roadmap Epigenomics project is a genome mapping project that is measuring the genomic distribution of nucleoproteins such as histones, DNA binding factors, and accessory proteins, as well as the genomic pattern of reversible covalent modifications on DNA and nucleoproteins.  The goal of the Roadmap Epigenomics project is to create a set of reference epigenomic maps for stem cells, differentiated cells, and primary tissues. The project is mapping DNA methylation sites, histone modification sites, transcription factor binding sites, and chromatin accessibility sites. RNA transcripts are also measured by RNA-seq.", 
    "readme_url": "http://egg2.wustl.edu/roadmap/web_portal/processed_data.html", 
    "publication": [
      {
        "pmid": "25693563", 
        "citation": "Roadmap Epigenomics Consortium et al. (2015) Integrative analysis of 111 reference human epigenomes. Nature. 518:317-330.", 
        "author": "Roadmap Epigenomics Consortium et al. et al."
      }, 
      {
        "pmid": "20944595", 
        "citation": "Bernstein, B. E., Stamatoyannopoulos, J. A., Costello, J. F., Ren, B., Milosavljevic, A., Meissner, A., Kellis, M., Marra, M. A., Beaudet, A. L., Ecker, J. R., Farnham, P. J., Hirst, M., Lander, E. S., Mikkelsen, T. S. and J. A. Thomson. (2010) The NIH Roadmap Epigenomics Mapping Consortium. Nat Biotechnol. 28:1045-1048.", 
        "author": "Bernstein et al."
      }
    ], 
    "resource_name": "Roadmap Epigenomics"
  }, 
  {
    "association": "gene-cell or tissue associations by differential expression of gene across cell and tissue types", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "cell or tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "epigenomicsmrna", 
    "resource_url": "http://www.roadmapepigenomics.org/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for primary cells and tissues measured by RNA-seq", 
    "resource_description": "project mapping the distribution of histones, DNA binding factors, and accessory proteins on the human genome, as well as the genomic distribution of covalent modifications on DNA and nucleoproteins, for stem cells, differentiated cells, and primary tissues", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "need to complete", 
    "long_description": "The Roadmap Epigenomics project is a genome mapping project that is measuring the genomic distribution of nucleoproteins such as histones, DNA binding factors, and accessory proteins, as well as the genomic pattern of reversible covalent modifications on DNA and nucleoproteins.  The goal of the Roadmap Epigenomics project is to create a set of reference epigenomic maps for stem cells, differentiated cells, and primary tissues. The project is mapping DNA methylation sites, histone modification sites, transcription factor binding sites, and chromatin accessibility sites. RNA transcripts are also measured by RNA-seq.", 
    "readme_url": "http://egg2.wustl.edu/roadmap/web_portal/processed_data.html", 
    "publication": [
      {
        "pmid": "25693563", 
        "citation": "Roadmap Epigenomics Consortium et al. (2015) Integrative analysis of 111 reference human epigenomes. Nature. 518:317-330.", 
        "author": "Roadmap Epigenomics Consortium et al. et al."
      }, 
      {
        "pmid": "20944595", 
        "citation": "Bernstein, B. E., Stamatoyannopoulos, J. A., Costello, J. F., Ren, B., Milosavljevic, A., Meissner, A., Kellis, M., Marra, M. A., Beaudet, A. L., Ecker, J. R., Farnham, P. J., Hirst, M., Lander, E. S., Mikkelsen, T. S. and J. A. Thomson. (2010) The NIH Roadmap Epigenomics Mapping Consortium. Nat Biotechnol. 28:1045-1048.", 
        "author": "Bernstein et al."
      }
    ], 
    "resource_name": "Roadmap Epigenomics"
  }, 
  {
    "association": "gene-perturbation associations by differential phosphorylation of protein across perturbations", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "perturbation", 
    "attribute_class": "perturbation", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "phosphoproteomics", 
    "isok": "Yes", 
    "directory": "silac", 
    "resource_url": null, 
    "number_of_genes": "4566", 
    "data_description": "phosphorylation levels of proteins in cell lines following perturbation measured by SILAC", 
    "resource_description": "collection of data from published SILAC experiments that measured protein phosphorylation changes in cell lines following experimental perturbation", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "84", 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "un-published data collection created by Nick Fernandez at the Ma'ayan Lab", 
    "long_description": "The SILAC Phosphoproteomics Collection is a collection of data from published SILAC experiments that measured protein phosphorylation levels in cell lines in control and experimental conditions", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": null, 
        "citation": null, 
        "author": null
      }
    ], 
    "resource_name": "SILAC Phosphoproteomics"
  }, 
  {
    "association": "gene-phenotype associations by crowd-sourced curation", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "phenotype", 
    "attribute_class": "phenotype", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "genetic association study", 
    "isok": "No", 
    "directory": "snpedia", 
    "resource_url": "http://snpedia.com/index.php/SNPedia", 
    "number_of_genes": null, 
    "data_description": "SNP-phenotype associations curated by SNPedia users from various sources", 
    "resource_description": "wiki of information about SNPs", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": null, 
    "notes": "data downloaded using the SNPedia api", 
    "long_description": "SNPedia is a wiki of information about SNPs.  Many users contribute and curate the content on SNPedia, which draws SNP information from individual genetic association studies and from databases such as OMIM and ClinVar.", 
    "readme_url": "http://snpedia.com/index.php/Bulk", 
    "publication": [
      {
        "pmid": "22140107", 
        "citation": "Cariaso, M. and G. Lennon. (2012) SNPedia: a wiki supporting personal genome annotation, interpretation and analysis. Nucleic Acids Res. 40:D1308-D1312.", 
        "author": "Cariaso et al."
      }
    ], 
    "resource_name": "SNPedia"
  }, 
  {
    "association": "gene-microRNA associations predicted using known miRNA seed sequences", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "microRNA", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "genomics", 
    "isok": null, 
    "directory": "targetscan", 
    "resource_url": "http://www.targetscan.org/", 
    "number_of_genes": "7075", 
    "data_description": "target genes of microRNAs predicted by searching genes for sites matching known miRNA seed regions", 
    "resource_description": "database of microRNAs and predicted targets", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "222", 
    "data_class": "prediction", 
    "data_url": "http://www.targetscan.org/vert_61/vert_61_data_download/Conserved_Site_Context_Scores.txt.zip;http://www.targetscan.org/vert_61/vert_61_data_download/Nonconserved_Site_Context_Scores.txt.zip", 
    "notes": null, 
    "long_description": null, 
    "readme_url": "http://www.targetscan.org/cgi-bin/targetscan/data_download.cgi?db=vert_61", 
    "publication": [
      {
        "pmid": "21909094", 
        "citation": "Garcia, D. M., Baek, D., Shin, C., Bell, G. W., Grimson, A. and D. P. Bartel. (2011) Weak seed-pairing stability and high target-site abundance decrease the proficiency of lsy-6 and other microRNAs. Nat Struct Mol Biol. 18:1139-1146.", 
        "author": "Garcia et al."
      }, 
      {
        "pmid": "18955434", 
        "citation": "Friedman, R. C., Farh, K. K., Burge, C. B. and D. P. Bartel. (2009) Most mammalian mRNAs are conserved targets of microRNAs. Genome Res. 19:92-105.", 
        "author": "Friedman et al."
      }, 
      {
        "pmid": "17612493", 
        "citation": "Grimson, A., Farh, K. K., Johnston, W. K., Garrett-Engele, P., Lim, L. P. and D. P. Bartel. (2007) MicroRNA targeting specificity in mammals: determinants beyond seed pairing. Mol Cell. 27:91-105.", 
        "author": "Grimson et al."
      }
    ], 
    "resource_name": "TargetScan microRNA"
  }, 
  {
    "association": "gene-tissue sample associations by differential expression of gene across tissue samples", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "tissue sample", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "down_attribute_set_library": "attribute_set_library_dn_crisp.gmt.gz", 
      "up_attribute_set_library": "attribute_set_library_up_crisp.gmt.gz", 
      "up_gene_set_library": "gene_set_library_up_crisp.gmt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "down_gene_set_library": "gene_set_library_dn_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "transcriptomics", 
    "isok": "Yes", 
    "directory": "tcga", 
    "resource_url": "https://tcga-data.nci.nih.gov/tcga/", 
    "number_of_genes": null, 
    "data_description": "mRNA expression profiles for tumor and normal tissue samples measured by RNA-seq", 
    "resource_description": "project collecting clinical, genomic, proteomic, and epigenomic data for cancer patients and tumor samples", 
    "todo": null, 
    "status": "in production", 
    "number_of_attributes": null, 
    "data_class": "functional genomics", 
    "data_url": "https://tcga-data.nci.nih.gov/tcga/findArchives.htm", 
    "notes": "choose data of interest using bulk download form", 
    "long_description": "The Cancer Genome Atlas is a cancer profiling project that collects clinical and genomic data for cancer patients and tumor samples. Copy number variations, DNA methylations, mRNA and miRNA expression are profiled for most tumors. Whole genome sequencing and protein abundance are measured for a subset of tumors. Clinical data, such as survival and recurrence are also collected.", 
    "readme_url": "https://wiki.nci.nih.gov/display/TCGA/TCGA+Bulk+Download+User%27s+Guide;jsessionid=7BCF3B975163016B14289802F9847CA4;https://tcga-data.nci.nih.gov/annotations/", 
    "publication": [
      {
        "pmid": "24071849", 
        "citation": "Cancer Genome Atlas Research Network et al. (2013) The Cancer Genome Atlas Pan-Cancer analysis project. Nat Genet. 45:1113-1120.", 
        "author": "Cancer Genome Atlas Research Network et al. et al."
      }
    ], 
    "resource_name": "The Cancer Genome Atlas (TCGA)"
  }, 
  {
    "association": "gene-tissue associations from automated text-mining of biomedical literature", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensentissuetextmining", 
    "resource_url": "http://tissues.jensenlab.org/Search", 
    "number_of_genes": "16184", 
    "data_description": "gene-tissue co-occurrence scores from text-mining biomedical abstracts", 
    "resource_description": "database of protein expression evidence for tissues and cell types collected by integrating experimental datasets, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "4187", 
    "data_class": "text-mining", 
    "data_url": "http://download.jensenlab.org/human_tissue_textmining_full.tsv", 
    "notes": null, 
    "long_description": "TISSUES is a database of protein expression evidence for tissues and cell types, using evidence collected by integrating experimental datasets, by manual literature curation, or by automated textmining.  Tissue and cell type terms were mapped to the BRENDA Tissue Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-tissue/cell type associations.", 
    "readme_url": "http://tissues.jensenlab.org/About", 
    "publication": [
      {
        "pmid": null, 
        "citation": "Santos, A., Tsafou, K., Stolte, C., Frankild, S., O'Donoghue, S. and L. J. Jensen. (2014) Comprehensive comparison of large-scale tissue expression datasets. Biorxiv Preprint. doi:10.1101/010975.", 
        "author": "Santos et al."
      }
    ], 
    "resource_name": "TISSUES"
  }, 
  {
    "association": "gene-tissue associations by integrating evidence from manual literature curation", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensentissuecurated", 
    "resource_url": "http://tissues.jensenlab.org/Search", 
    "number_of_genes": "16216", 
    "data_description": "protein tissue expression evidence scores by manual literature curation", 
    "resource_description": "database of protein expression evidence for tissues and cell types collected by integrating experimental datasets, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "643", 
    "data_class": "literature curation", 
    "data_url": "http://download.jensenlab.org/human_tissue_knowledge_full.tsv", 
    "notes": null, 
    "long_description": "TISSUES is a database of protein expression evidence for tissues and cell types, using evidence collected by integrating experimental datasets, by manual literature curation, or by automated textmining.  Tissue and cell type terms were mapped to the BRENDA Tissue Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-tissue/cell type associations.", 
    "readme_url": "http://tissues.jensenlab.org/About", 
    "publication": [
      {
        "pmid": null, 
        "citation": "Santos, A., Tsafou, K., Stolte, C., Frankild, S., O'Donoghue, S. and L. J. Jensen. (2014) Comprehensive comparison of large-scale tissue expression datasets. Biorxiv Preprint. doi:10.1101/010975.", 
        "author": "Santos et al."
      }
    ], 
    "resource_name": "TISSUES"
  }, 
  {
    "association": "gene-tissue associations by integrating evidence from experimental studies", 
    "download_date": {
      "day": "02", 
      "month": "02", 
      "year": "2015"
    }, 
    "attribute": "tissue", 
    "attribute_class": "tissue or cell line", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "No", 
    "directory": "jensentissueexpts", 
    "resource_url": "http://tissues.jensenlab.org/Search", 
    "number_of_genes": "15505", 
    "data_description": "protein tissue expression evidence scores by integrating experimental data", 
    "resource_description": "database of protein expression evidence for tissues and cell types collected by integrating experimental datasets, by manual literature curation, or by automated textmining", 
    "todo": "clean up processing script and include script for getting ontology structure", 
    "status": "pending", 
    "number_of_attributes": "243", 
    "data_class": "data aggregation", 
    "data_url": "http://download.jensenlab.org/human_tissue_experiments_full.tsv", 
    "notes": null, 
    "long_description": "TISSUES is a database of protein expression evidence for tissues and cell types, using evidence collected by integrating experimental datasets, by manual literature curation, or by automated textmining.  Tissue and cell type terms were mapped to the BRENDA Tissue Ontology.  Data from disparate sources were standardized by assigning confidence scores for all protein-tissue/cell type associations.", 
    "readme_url": "http://tissues.jensenlab.org/About", 
    "publication": [
      {
        "pmid": null, 
        "citation": "Santos, A., Tsafou, K., Stolte, C., Frankild, S., O'Donoghue, S. and L. J. Jensen. (2014) Comprehensive comparison of large-scale tissue expression datasets. Biorxiv Preprint. doi:10.1101/010975.", 
        "author": "Santos et al."
      }
    ], 
    "resource_name": "TISSUES"
  }, 
  {
    "association": "gene-transcription factor associations from low-throughput or high-throughput transcription factor functional studies", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "transcription factor", 
    "attribute_class": "gene", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": "No (L)", 
    "directory": "transfac", 
    "resource_url": "http://www.gene-regulation.com/", 
    "number_of_genes": null, 
    "data_description": "target genes of transcription factors manually curated from low-throughput or high-throughput transcription factor functional studies", 
    "resource_description": "database of transcription factors, binding sites, and target genes", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": null, 
    "data_class": "data aggregation", 
    "data_url": null, 
    "notes": null, 
    "long_description": "database of transcription factors, binding sites, and target genes", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "16381825", 
        "citation": "Matys, V., Kel-Margoulis, O. V., Fricke, E., Liebich, I., Land, S., Barre-Dirrie, A., Reuter, I., Chekmenev, D., Krull, M., Hornischer, K., Voss, N., Stegmaier, P., Lewicki-Potapov, B., Saxel, H., Kel, A. E. and E. Wingender. (2006) TRANSFAC and its module TRANSCompel: transcriptional gene regulation in eukaryotes. Nucleic Acids Res. 34:D108-D110.", 
        "author": "Matys et al."
      }
    ], 
    "resource_name": "TRANSFAC"
  }, 
  {
    "association": "gene-transcription factor associations predicted using known transcription factor binding site motifs", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "transcription factor", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "genomics", 
    "isok": null, 
    "directory": "transfacpwm", 
    "resource_url": "http://www.gene-regulation.com/", 
    "number_of_genes": "21989", 
    "data_description": "target genes of transcription factors  predicted using known transcription factor binding site motifs", 
    "resource_description": "database of transcription factors, binding sites, and target genes", 
    "todo": null, 
    "status": "pending", 
    "number_of_attributes": "326", 
    "data_class": "prediction", 
    "data_url": null, 
    "notes": null, 
    "long_description": "database of transcription factors, binding sites, and target genes", 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "16381825", 
        "citation": "Matys, V., Kel-Margoulis, O. V., Fricke, E., Liebich, I., Land, S., Barre-Dirrie, A., Reuter, I., Chekmenev, D., Krull, M., Hornischer, K., Voss, N., Stegmaier, P., Lewicki-Potapov, B., Saxel, H., Kel, A. E. and E. Wingender. (2006) TRANSFAC and its module TRANSCompel: transcriptional gene regulation in eukaryotes. Nucleic Acids Res. 34:D108-D110.", 
        "author": "Matys et al."
      }
    ], 
    "resource_name": "TRANSFAC"
  }, 
  {
    "association": "gene-protein domain associations by sequence similarity to domain signatures", 
    "download_date": {
      "day": "24", 
      "month": "03", 
      "year": "2015"
    }, 
    "attribute": "protein domain", 
    "attribute_class": "structural feature", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "protein structure", 
    "isok": "No", 
    "directory": "interpro", 
    "resource_url": "http://www.uniprot.org/", 
    "number_of_genes": "18002", 
    "data_description": "protein domains predicted for gene products based on sequence similarity to known domain signatures", 
    "resource_description": "knowledgebase for proteins, including protein sequences, structural annotations, and functional annotations", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "11015", 
    "data_class": "structural", 
    "data_url": "http://www.uniprot.org/uniprot/?query=organism%3A%22Homo+sapiens+%5B9606%5D%22+AND+%22complete+proteome%22&sort=score", 
    "notes": "from search bar, go to advanced search, select organism as first filter and choose homo sapiens then select all as second filter and type complete proteome, after getting results, at left column, filter for just Reviewed, Swiss-Prot entries (~20,000), then at top of table, click the columns button, expand the Family and domain section and check Interpro, then return to the results table and download the table to a text file, filter results for entries that have an InterPro domain annotation", 
    "long_description": "The Universal Protein Resource is a knowledgebase for proteins, including protein sequences, structural annotations, and functional annotations.", 
    "readme_url": "http://www.uniprot.org/help/domain", 
    "publication": [
      {
        "pmid": "25348405", 
        "citation": "UniProt Consortium. (2015) UniProt: a hub for protein information. Nucleic Acids Res. 43:D204-212", 
        "author": "UniProt Consortium. et al."
      }, 
      {
        "pmid": "25428371", 
        "citation": "Mitchell, A. et al. (2015) The InterPro protein families database: the classification resource after 15 years. Nucleic Acids Res. 43:D213-221.", 
        "author": "Mitchell et al."
      }
    ], 
    "resource_name": "Universal Protein Resource (Uniprot)"
  }, 
  {
    "association": "gene-viral protein associations from curated protein interaction studies", 
    "download_date": {
      "day": "06", 
      "month": "04", 
      "year": "2015"
    }, 
    "attribute": "viral protein", 
    "attribute_class": "gene", 
    "files": {
      "gene_set_library": "gene_set_library_crisp.gmt.gz"
    }, 
    "data_type": "physical interactions", 
    "isok": null, 
    "directory": "virusmint", 
    "resource_url": "http://mint.bio.uniroma2.it/virusmint/", 
    "number_of_genes": "847", 
    "data_description": "interactions between viral and human proteins manually curated from literature", 
    "resource_description": "database of interactions between viral and human proteins", 
    "todo": null, 
    "status": "ready", 
    "number_of_attributes": "85", 
    "data_class": "literature curation", 
    "data_url": null, 
    "notes": null, 
    "long_description": null, 
    "readme_url": null, 
    "publication": [
      {
        "pmid": "18974184", 
        "citation": "Chatr-aryamontri, A., Ceol, A., Peluso, D., Nardozza, A., Panni, S., Sacco, F., Tinti, M., Smolyar, A., Castagnoli, L., Vidal, M., Cusick, M. E. and G. Cesareni. (2009) VirusMINT: a viral protein interaction database. Nucleic Acids Res. 37:D669-D673.", 
        "author": "Chatr-aryamontri et al."
      }
    ], 
    "resource_name": "Virus MINT"
  }, 
  {
    "association": "gene-pathway associations from curated pathways", 
    "download_date": {
      "day": "17", 
      "month": "12", 
      "year": "2014"
    }, 
    "attribute": "pathway", 
    "attribute_class": "functional phrase", 
    "files": {
      "edge_list": "gene_attribute_edges.txt.gz", 
      "gene_set_library": "gene_set_library_crisp.gmt.gz", 
      "gene_list": "gene_list_terms.txt.gz", 
      "script": "processing_script.m", 
      "attribute_list": "attribute_list_entries.txt.gz", 
      "gene_similarity_matrix": "gene_similarity_matrix_cosine.txt.gz", 
      "attribute_table": "gene_attribute_matrix.txt.gz", 
      "attribute_set_library": "attribute_set_library_crisp.gmt.gz", 
      "attribute_similarity_matrix": "attribute_similarity_matrix_cosine.txt.gz"
    }, 
    "data_type": "associations", 
    "isok": "Yes", 
    "directory": "wikipathways", 
    "resource_url": "http://www.wikipathways.org", 
    "number_of_genes": "6097", 
    "data_description": "sets of proteins participating in pathways", 
    "resource_description": "database of curated pathways", 
    "todo": "done", 
    "status": "ready", 
    "number_of_attributes": "427", 
    "data_class": "literature curation", 
    "data_url": "http://pathvisio.org/data/bots/gmt/wikipathways.gmt", 
    "notes": null, 
    "long_description": "database of curated pathways", 
    "readme_url": "http://www.wikipathways.org/index.php/Download_Pathways", 
    "publication": [
      {
        "pmid": "22096230", 
        "citation": "Kelder, T., van Iersel, M. P., Hanspers, K., Kutmon, M., Conklin, B. R., Evelo, C. T. and A. R. Pico. (2012) WikiPathways: building research communities on biological pathways. Nucleic Acids Research. 40:D1301-1307.", 
        "author": "Kelder et al."
      }
    ], 
    "resource_name": "Wikipathways"
  }
]
      
});
