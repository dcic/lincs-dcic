package org.flowcyt.cfcs;
// CFCSDatatypeFloat.java

/* ------------------------------------------------------------------------- *\
This software and documentation are provided 'as is' and Tree Star, Inc., its
contractors and partners specifically disclaim all other warranties, expressed
or implied, including but not limited to implied warranties of merchantability
and fitness for a particular purpose, or during any particular date range.

By using this software, you are agreeing to these limits of liability, and to
hold Tree Star harmless for any information, accurate or erroneous, that might
be generated by the program.  This software is intended for research use only.

Christopher Lane <cdl@best.classes> for Tree Star  1/14/2002      Copyright 2002
\* ------------------------------------------------------------------------- */


import java.io.DataOutputStream;
import java.io.IOException;

public final class CFCSDatatypeFloat extends CFCSDatatypeDouble
{

    // --------------------------------------------------------------------

    public final void readData(final int index, final byte[][] cinch)
    {
        final float[] row = new float[cinch.length];

        for (int cell = 0; cell < cinch.length; cell++)
        {
            int datum = (cinch[cell][0] & 0xff);

            for (int i = 1; i < cinch[cell].length; i++)
            {
                datum = (datum << 8) | (cinch[cell][i] & 0xff);
            }

            row[cell] = Float.intBitsToFloat(datum);
        }

        if (index == data.size())
            data.add(row);
        else
            data.set(index, row);
    }

    // --------------------------------------------------------------------

    public final void writeData(final int index, final int count, final DataOutputStream stream)
    {
        final float[] row = (float[]) data.get(index);

        try
        {
            for (int i = 0; i < count; i++)
            {
                stream.writeFloat(row[i]);
            }
        }
        catch (IOException exception)
        {
            throw new CFCSError(CFCSIOError, exception);
        }
    }

    // --------------------------------------------------------------------

    public final void getData(final int index, final float[] array)
    {
        final float[] row = (float[]) data.get(index);

        if (array.length < row.length)
        {
            throw new CFCSError(CFCSInsufficientSpace, array.length);
        }

        System.arraycopy(row, 0, array, 0, row.length);
    }

    public final void getData(final int index, final double[] array)
    {
        final float[] row = (float[]) data.get(index);

        if (array.length < row.length)
        {
            throw new CFCSError(CFCSInsufficientSpace, array.length);
        }

        for (int i = 0; i < row.length; i++)
            array[i] = row[i];
    }

    // --------------------------------------------------------------------

    public final void setData(final int index, final float[] array)
    {
        final float[] row = (float[]) data.get(index);

        if (array.length < row.length)
        {
            throw new CFCSError(CFCSInsufficientData, array.length);
        }

        System.arraycopy(array, 0, row, 0, array.length);
    }

    public final void setData(final int index, final double[] array)
    {
        final float[] row = (float[]) data.get(index);

        if (array.length < row.length)
        {
            throw new CFCSError(CFCSInsufficientData, array.length);
        }

        for (int i = 0; i < row.length; i++)
            row[i] = (float) array[i]; // information loss
    }

    // --------------------------------------------------------------------

    public final void addData(final float[] array)
    {
        final float[] row = new float[array.length];

        System.arraycopy(array, 0, row, 0, array.length);

        data.add(row);
    }

    public final void addData(final double[] array)
    {
        final float[] row = new float[array.length];

        for (int i = 0; i < row.length; i++)
            row[i] = (float) array[i]; // information loss

        data.add(row);
    }

    // --------------------------------------------------------------------

}
