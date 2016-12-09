package org.flowcyt.cfcs;
// CFCSUncorrelatedData.java

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

import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public final class CFCSUncorrelatedData extends CFCSAbstractData implements CFCSErrorCodes
{

    // --------------------------------------------------------------------

    /* friendly */
    CFCSUncorrelatedData(final CFCSDatatype datatype, final CFCSKeywords keywords)
    {
        super(UNCORRELATED, datatype, keywords);

        sizing = new CFCSDataSizing(keywords)
        {
            public int getSizeVariability()
            {
                return ROW;
            }
        };

        datatype.setSizingObject(sizing);
    }

    // --------------------------------------------------------------------

    protected final byte[][][] cinchBytes(final byte[] bytes)
    {
        int[] sizes = null;
        int size = 0;
	    final int nParameters = parameters.getCount();

	    final boolean variable = (sizing.getSizeVariability() != CFCSDataSizing.FIXED);

        final byte[][][] cinched = new byte[nParameters][][];

        if (variable)
            sizes = sizing.getByteSizes();
        else
            size = sizing.getByteSize();

        for (int parameter = 0, position = 0; parameter < nParameters; parameter++)
        {
            int range = (parameters.getParameter(parameter)).getRange();

            cinched[parameter] = new byte[range][];

            if (variable)
                size = sizes[parameter];

            for (int bin = 0; bin < range; bin++, position += size)
            {
                byte[] cinch = cinched[parameter][bin] = new byte[size];

                System.arraycopy(bytes, position, cinch, 0, size);
            }
        }

        return cinched;
    }

    // --------------------------------------------------------------------

    public final byte[] getBytes()
    {
        final ByteArrayOutputStream buffer = new ByteArrayOutputStream();

        try
        {
            DataOutputStream stream = new DataOutputStream(buffer);

            for (int parameter = 0, count = parameters.getCount(); parameter < count; parameter++)
            {
                int range = (parameters.getParameter(parameter)).getRange();

                try
                {
                    datatype.writeData(parameter, range, stream);
                }
                catch (IndexOutOfBoundsException exception)
                {
                    throw new CFCSError(CFCSNoSuchParameter, parameter);
                }
            }

            stream.close();
        }
        catch (IOException exception)
        {
            throw new CFCSError(CFCSIOError, exception);
        }

        byte[] bytes = buffer.toByteArray();

        return (sizing.isPackedData()) ? packBytes(bytes) : bytes;
    }

    // --------------------------------------------------------------------

    public final void setBytes(final byte[] bytes)
    {
        super.setBytes(bytes);

        for (int parameter = 0, count = parameters.getCount(); parameter < count; parameter++)
        {
            try
            {
                datatype.readData(parameter, cinched[parameter]);
            }
            catch (IndexOutOfBoundsException exception)
            {
                throw new CFCSError(CFCSNoSuchParameter, parameter);
            }
        }
    }

    // --------------------------------------------------------------------

    public final void getArray(final int index, final int[] array)
    {
        try
        {
            datatype.getData(index, array);
        }
        catch (IndexOutOfBoundsException exception)
        {
            throw new CFCSError(CFCSNoSuchParameter, index);
        }
        catch (CFCSDataSizeError exception)
        {
            throw new CFCSError(CFCSNotImplemented);
        }
    }

    public final void setArray(final int index, final int[] array)
    {
        try
        {
            datatype.setData(index, array);
        }
        catch (IndexOutOfBoundsException exception)
        {
            throw new CFCSError(CFCSNoSuchParameter, index);
        }
        catch (CFCSDataSizeError exception)
        {
            throw new CFCSError(CFCSNotImplemented);
        }
    }

    public final void addArray(final int[] array)
    {
        try
        {
            datatype.addData(array);
        }
        catch (CFCSDataSizeError exception)
        {
            throw new CFCSError(CFCSNotImplemented);
        }

        int events = 0; // it's redudant to do this on every row...
        for (int i = 0; i < array.length; i++)
            events += array[i];
        setCount(events);
    }

    // --------------------------------------------------------------------

    public final void getArray(final int parameter, final int nBytes, final byte[][] table)
    {
        final int range = (parameters.getParameter(parameter)).getRange();

        if (table.length < range)
        {
            throw new CFCSError(CFCSInsufficientSpace, table.length);
        }

        for (int bin = 0; bin < range; bin++)
        {
            byte[] bytes = table[bin];

            if (bytes.length < nBytes)
            {
                throw new CFCSError(CFCSInsufficientSpace, bytes.length);
            }

            byte[] cinch = cinched[parameter][bin];

            int length = cinch.length;
            int limit = nBytes - length;

            for (int i = 0; i < limit; i++)
                bytes[i] = 0;

            for (int i = 0; i < length; i++)
                bytes[limit + i] = cinch[i];
        }
    }

    public static final void setArray(final int index, final int nBytes, final byte[][] table)
    {
        throw new CFCSError(CFCSNotImplemented);
    }

    // --------------------------------------------------------------------

}
