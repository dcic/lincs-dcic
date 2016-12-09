package org.flowcyt.cfcs;
// CFCSDataSizing.java

/* ------------------------------------------------------------------------- *\
This software and documentation are provided 'as is' and Tree Star, Inc., its
contractors and partners specifically disclaim all other warranties, expressed
or implied, including but not limited to implied warranties of merchantability
and fitness for a particular purpose, or during any particular date range.

By using this software, you are agreeing to these limits of liability, and to
hold Tree Star harmless for any information, accurate or erroneous, that might
be generated by the program.  This software is intended for research use only.

Christopher Lane <cdl@best.classes> for Tree Star  1/16/2002      Copyright 2002
\* ------------------------------------------------------------------------- */


public class CFCSDataSizing implements CFCSErrorCodes
{
    /* friendly */
    static final int FIXED = 0;
    /* friendly */
    static final int COLUMN = 1;
    /* friendly */
    static final int ROW = 2;

    private static final int BITSPERBYTE = 8;

    private int size = Integer.MIN_VALUE;

    private int[] sizes;
    private int[] byteSizes;
    private int[] rangeMasks;
    private int[] fieldMasks;

    private final CFCSKeywords keywords;
    private final CFCSParameters parameters;

    // --------------------------------------------------------------------

    /* friendly */
    CFCSDataSizing(final CFCSKeywords keywords)
    {
        this.keywords = keywords;
        this.parameters = new CFCSParameters(keywords);
    }

    // --------------------------------------------------------------------

    /* friendly */
    int getSizeVariability()
    {
        return FIXED;
    }

//    /* friendly */
    final boolean isVariableSize()
    {
        return (getSizeVariability() != FIXED);
    }

    /* friendly */
    boolean isRangeMaskable()
    {
        return false;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final boolean isPackedData()
    {
        if (keywords.getDatatype() != CFCSDatatype.BINARY)
            return false;

        for (int i = 0, count = parameters.getCount(); i < count; i++)
        {
            CFCSParameter parameter = parameters.getParameter(i);

            if ((parameter.getFieldSize() % BITSPERBYTE) != 0)
                return true;
        }

        return false;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int getSize()
    {
        if (size == Integer.MIN_VALUE)
        {
            int count = parameters.getCount();

            if (count < 1)
                throw new CFCSError(CFCSSystemError);

            int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;

            for (int i = 0; i < count; i++)
            {
                CFCSParameter parameter = parameters.getParameter(i);

                int width = parameter.getFieldSize();

                if (width > max)
                    max = width;
                if (width < min)
                    min = width;
            }

            if (min == max)
                size = min;
            else
                throw new CFCSError(CFCSSystemError);
        }

        return size;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int getByteSize()
    {
        return (getSize() + (BITSPERBYTE - 1)) / BITSPERBYTE;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int[] getSizes()
    {
        if (sizes == null)
        {
            int count = parameters.getCount();

            sizes = new int[count];

            for (int i = 0; i < count; i++)
            {
                CFCSParameter parameter = parameters.getParameter(i);

                sizes[i] = parameter.getFieldSize();
            }
        }

        return sizes;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int[] getByteSizes()
    {
        if (byteSizes == null)
        {
            int[] sizes = getSizes();
            boolean ascii = (keywords.getDatatype() == CFCSDatatype.ASCII);

            byteSizes = new int[sizes.length];

            for (int i = 0; i < sizes.length; i++)
            {
                if (ascii)
                    byteSizes[i] = sizes[i];
                else
                    byteSizes[i] = (sizes[i] + (BITSPERBYTE - 1)) / BITSPERBYTE;
            }
        }

        return byteSizes;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int[] getRangeMasks()
    {
        if (rangeMasks == null)
        {
            int count = parameters.getCount();

            rangeMasks = new int[count];

            for (int i = 0; i < count; i++)
            {
                CFCSParameter parameter = parameters.getParameter(i);
                rangeMasks[i] = makeRangeMask(parameter.getRange());
            }
        }

        return rangeMasks;
    }

    // --------------------------------------------------------------------

    private static int makeRangeMask(int range)
    {
        int mask = 1;

        range--;
        while ((range | mask) != mask)
            mask = (mask << 1) + 1;

        return mask;
    }

    // --------------------------------------------------------------------

    /* friendly */
    final int[] getFieldMasks()
    {
        if (fieldMasks == null)
        {
            int sizes[] = getSizes();

            fieldMasks = new int[sizes.length];

            for (int i = 0; i < sizes.length; i++)
            {
                fieldMasks[i] = (1 << sizes[i]) - 1;
            }
        }

        return fieldMasks;
    }

    // --------------------------------------------------------------------

}
